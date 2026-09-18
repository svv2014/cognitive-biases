import { createStage, ease, line, makePoints, normal } from './stage.js';

/**
 * Mechanism scenes: short, looping simulations for biases whose mechanism is
 * easier to watch than to read. Each is labelled as a simulation on the page —
 * the numbers are illustrative, not data.
 *
 * Every scene has the signature `(container, { palette, random, onCaption })`
 * and returns a dispose function. `onCaption(key, vars)` names the locale string
 * (under `scenes.`) that describes what is on screen right now.
 */

// ------------------------------------------------------------ model collapse

/**
 * Each generation is fitted to the one before and resampled; the tails are
 * under-sampled every time, so the spread shrinks and the rare, vivid points at
 * the edges fade into the grey average.
 */
function modelCollapse(container, { palette, random, onCaption }) {
  const { THREE, scene, run, dispose } = createStage(container);
  const N = 420;
  const GENERATIONS = 7;
  const STEP = 2.4;
  const { points, pos, col } = makePoints(THREE, N, 6);
  scene.add(points);

  const edgeA = new THREE.Color(palette.left);
  const edgeB = new THREE.Color(palette.right);
  const mid = new THREE.Color(palette.muted);
  const lanes = Float32Array.from({ length: N }, () => (random() - 0.5) * 2.6);

  const sample = (mean, sd) => Float32Array.from({ length: N }, () => mean + normal(random) * sd);
  let from;
  let to;
  let gen;
  let clock;
  const SD0 = 1.55;

  // The bell curve of generation zero stays on screen as the yardstick.
  const curve = (sd, y0 = -0.8, h = 3.1) =>
    Array.from({ length: 121 }, (_, i) => {
      const x = -4.8 + (i / 120) * 9.6;
      return [x, y0 + h * Math.exp(-(x * x) / (2 * sd * sd))];
    });
  scene.add(line(THREE, curve(SD0), palette.muted, 0.5));
  const current = line(THREE, curve(SD0), palette.accent, 0.9);
  scene.add(current);

  function reset() {
    gen = 0;
    clock = 0;
    from = sample(0, SD0);
    to = from;
    onCaption('modelCollapse.gen', { n: 1 });
  }
  reset();

  const sdOf = (xs) => {
    const m = xs.reduce((a, b) => a + b, 0) / xs.length;
    return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / xs.length);
  };

  const tmp = new THREE.Color();
  run((dt) => {
    clock += dt;
    if (clock > STEP) {
      clock = 0;
      gen += 1;
      if (gen >= GENERATIONS + 2) {
        reset();
      } else if (gen >= GENERATIONS) {
        onCaption('modelCollapse.end', {});
      } else {
        // Refit on the finite sample, losing a slice of the tails each time.
        from = to;
        to = sample(0, sdOf(from) * 0.72);
        onCaption('modelCollapse.gen', { n: gen + 1 });
      }
    }
    const k = gen >= GENERATIONS ? 1 : ease(clock / 0.9);
    let sd = 0;
    for (let i = 0; i < N; i++) {
      const x = from[i] + (to[i] - from[i]) * k;
      sd += x * x;
      // The sample sits in a strip under the curves it is drawn from.
      pos.setXYZ(i, x, -2.05 + lanes[i] * 0.3, 0);
      // Distance from the centre decides the colour: the edges are the vivid,
      // rare cases; the middle is the grey average.
      const edge = Math.min(1, Math.abs(x) / 3.2);
      tmp.copy(mid).lerp(x < 0 ? edgeA : edgeB, edge);
      col.setXYZ(i, tmp.r, tmp.g, tmp.b);
    }
    pos.needsUpdate = true;
    col.needsUpdate = true;
    const g = current.geometry;
    const pts = curve(Math.max(0.15, Math.sqrt(sd / N)));
    for (let i = 0; i < pts.length; i++) g.attributes.position.setXY(i, pts[i][0], pts[i][1]);
    g.attributes.position.needsUpdate = true;
  });

  return dispose;
}

// ---------------------------------------------------- feedback amplification

/**
 * A crowd that leans slightly one way. Each pass, the model sharpens the lean
 * and people take the sharpened version back in, so a 52/48 split grows.
 */
function feedbackLoop(container, { palette, random, onCaption }) {
  const { THREE, scene, run, dispose } = createStage(container);
  const N = 360;
  const STEP = 2.1;
  const { points, pos, col } = makePoints(THREE, N, 7);
  scene.add(points);

  // A sunflower spiral fills the disk evenly.
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const r = 2.5 * Math.sqrt((i + 0.5) / N);
    pos.setXYZ(i, Math.cos(i * golden) * r - 1.2, Math.sin(i * golden) * r, 0);
  }
  pos.needsUpdate = true;
  // Which points flip first is fixed per run but not spatially ordered.
  const rank = Array.from({ length: N }, (_, i) => i).sort(() => random() - 0.5);
  const order = new Float32Array(N);
  rank.forEach((p, i) => {
    order[p] = i / N;
  });

  const A = new THREE.Color(palette.left);
  const B = new THREE.Color(palette.right);

  // The share bar on the right.
  const barBg = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 5),
    new THREE.MeshBasicMaterial({ color: palette.muted, transparent: true, opacity: 0.35 })
  );
  barBg.position.set(3.4, 0, 0);
  const bar = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 5), new THREE.MeshBasicMaterial({ color: palette.left }));
  bar.position.set(3.4, 0, 0.1);
  scene.add(barBg, bar);
  const half = line(THREE, [[3.05, 0], [3.75, 0]], palette.muted, 0.9);
  scene.add(half);

  const amplify = (p) => {
    const logit = Math.log(p / (1 - p));
    return 1 / (1 + Math.exp(-logit * 1.7));
  };

  let share;
  let shown;
  let pass;
  let clock;
  function reset() {
    share = 0.52;
    shown = 0.52;
    pass = 0;
    clock = 0;
    onCaption('feedback.start', { share: 52 });
  }
  reset();

  const tmp = new THREE.Color();
  run((dt) => {
    clock += dt;
    if (clock > STEP) {
      clock = 0;
      if (share > 0.93) {
        reset();
      } else {
        pass += 1;
        share = amplify(share);
        onCaption(pass % 2 ? 'feedback.model' : 'feedback.people', {
          n: pass,
          share: Math.round(share * 100),
        });
      }
    }
    shown += (share - shown) * Math.min(1, dt * 3);
    for (let i = 0; i < N; i++) {
      // A soft edge around the threshold makes the flip read as a wave.
      const w = Math.min(1, Math.max(0, (shown - order[i]) * 30 + 0.5));
      tmp.copy(B).lerp(A, w);
      col.setXYZ(i, tmp.r, tmp.g, tmp.b);
    }
    col.needsUpdate = true;
    bar.scale.y = shown;
    bar.position.y = -2.5 + 2.5 * shown;
  });

  return dispose;
}

// ------------------------------------------------------------- survivorship

/**
 * Wald's bombers, seen from above. Holes gather on the planes that returned;
 * then the places without holes light up — planes hit there did not return.
 */
function survivorship(container, { palette, random, onCaption }) {
  const { THREE, scene, run, dispose } = createStage(container);

  // Outline of a bomber from above, nose at the top.
  const outline = [
    [0, 2.7], [0.28, 2.3], [0.32, 0.9], [3.8, 0.3], [3.8, -0.15], [0.3, -0.25],
    [0.24, -1.9], [1.3, -2.35], [1.3, -2.6], [0, -2.5], [-1.3, -2.6], [-1.3, -2.35],
    [-0.24, -1.9], [-0.3, -0.25], [-3.8, -0.15], [-3.8, 0.3], [-0.32, 0.9], [-0.28, 2.3], [0, 2.7],
  ];
  scene.add(line(THREE, outline, palette.muted, 0.9));

  // Where hits were survivable, and where they were not.
  const survivable = [
    [0.9, 3.6, -0.1, 0.25], // right wing (x0, x1, y0, y1)
    [-3.6, -0.9, -0.1, 0.25], // left wing
    [-0.2, 0.2, -1.8, 0.7], // fuselage
    [-1.1, 1.1, -2.5, -2.3], // tailplane
  ];
  const fatal = [
    [1.9, 0.3], [-1.9, 0.3], // engines
    [0, 2.25], // cockpit
  ];
  for (const [x] of fatal.slice(0, 2)) {
    const nacelle = line(THREE, [[x - 0.22, 0.7], [x + 0.22, 0.7], [x + 0.22, -0.2], [x - 0.22, -0.2], [x - 0.22, 0.7]], palette.muted, 0.9);
    scene.add(nacelle);
  }

  const HOLES = 90;
  const { points, pos, col } = makePoints(THREE, HOLES, 5);
  scene.add(points);
  const ink = new THREE.Color(palette.ink);
  for (let i = 0; i < HOLES; i++) {
    // The whole point is that no returning plane was hit in a fatal spot, so
    // redraw any hole that lands near an engine or the cockpit.
    let x;
    let y;
    do {
      const [x0, x1, y0, y1] = survivable[Math.floor(random() * survivable.length)];
      x = x0 + random() * (x1 - x0);
      y = y0 + random() * (y1 - y0);
    } while (fatal.some(([fx, fy]) => Math.hypot(x - fx, y - fy) < 0.5));
    pos.setXYZ(i, x, y, 0);
    col.setXYZ(i, ink.r, ink.g, ink.b);
  }
  pos.needsUpdate = true;
  col.needsUpdate = true;

  const rings = fatal.map(([x, y]) => {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.28, 0.36, 40),
      new THREE.MeshBasicMaterial({ color: palette.alarm, transparent: true, opacity: 0 })
    );
    ring.position.set(x, y, 0.1);
    scene.add(ring);
    return ring;
  });

  const CYCLE = 9;
  let phase = null;
  run((_, t) => {
    const c = t % CYCLE;
    const next = c < 4.5 ? 'survivorship.returned' : 'survivorship.lost';
    if (next !== phase) {
      phase = next;
      onCaption(phase, {});
    }
    points.geometry.setDrawRange(0, Math.floor(HOLES * Math.min(1, c / 3.5)));
    const glow = c < 4.5 ? 0 : Math.min(1, (c - 4.5) / 0.6);
    rings.forEach((r, i) => {
      r.material.opacity = glow;
      r.scale.setScalar(1 + 0.12 * Math.sin(t * 4 + i));
    });
  });

  return dispose;
}

// ---------------------------------------------------------------- anchoring

/**
 * Estimates of the Nile's length rain onto a number line. Each round the crowd
 * is first shown a different number, and the pile drifts towards it.
 */
function anchoring(container, { palette, random, onCaption, format }) {
  const { THREE, scene, run, dispose } = createStage(container);
  const MAX = 14000;
  const TRUTH = 6650;
  const X = (v) => -4.6 + (v / MAX) * 9.2;
  const BASE = -2.2;
  const N = 110;
  const BIN = 250;

  scene.add(line(THREE, [[-4.6, BASE], [4.6, BASE]], palette.muted, 1));
  const truth = line(THREE, [[X(TRUTH), BASE - 0.2], [X(TRUTH), 2.6]], palette.accent, 0.9);
  scene.add(truth);
  const anchorLine = line(THREE, [[0, BASE - 0.2], [0, 2.6]], palette.alarm, 0.9);
  scene.add(anchorLine);
  // A solid bar rather than a line: WebGL lines are one pixel wide.
  const meanLine = new THREE.Mesh(
    new THREE.PlaneGeometry(0.09, 0.9),
    new THREE.MeshBasicMaterial({ color: palette.ink, transparent: true })
  );
  meanLine.position.set(0, BASE - 0.1, 0.2);
  scene.add(meanLine);

  const { points, pos, col } = makePoints(THREE, N, 7);
  scene.add(points);
  const ink = new THREE.Color(palette.left);
  for (let i = 0; i < N; i++) col.setXYZ(i, ink.r, ink.g, ink.b);
  col.needsUpdate = true;

  let round = -1;
  let clock = 0;
  let targets = [];
  let anchor = 0;
  const ROUND = 6;

  function newRound() {
    round += 1;
    clock = 0;
    anchor = round % 2 ? 12000 : 2000;
    anchorLine.position.x = X(anchor);
    // Each guess: the truth, some honest noise, and a pull towards the anchor.
    const guesses = Array.from({ length: N }, () =>
      Math.max(300, Math.min(MAX - 300, TRUTH + normal(random) * 1900 + (anchor - TRUTH) * 0.38))
    );
    const bins = {};
    targets = guesses.map((g) => {
      const b = Math.round(g / BIN);
      bins[b] = (bins[b] ?? 0) + 1;
      return [X(b * BIN), BASE + 0.13 + (bins[b] - 1) * 0.2, 2.9 + random() * 2.5];
    });
    const mean = guesses.reduce((a, b) => a + b, 0) / N;
    meanLine.position.x = X(mean);
    onCaption('anchoring.round', { anchor: format(anchor), mean: format(Math.round(mean / 10) * 10), truth: format(TRUTH) });
  }
  newRound();

  run((dt) => {
    clock += dt;
    if (clock > ROUND) newRound();
    for (let i = 0; i < N; i++) {
      const [x, y, start] = targets[i];
      // Staggered drops from above, landing on their pile.
      const k = ease((clock * 1.4 - (i / N) * 2.2) / 0.8);
      pos.setXYZ(i, x, start + (y - start) * k, 0);
    }
    pos.needsUpdate = true;
    meanLine.material.opacity = ease((clock - 3.2) / 0.6);
  });

  return dispose;
}

export const scenes = {
  'model-collapse': modelCollapse,
  'feedback-loop-amplification': feedbackLoop,
  'survivorship-bias': survivorship,
  anchoring,
};
