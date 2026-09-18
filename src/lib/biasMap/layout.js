import { biases, layerOf } from '../../data/biases.js';
import { categoryById } from '../../data/categories.js';

/**
 * Where each bias sits on the map. Pure and deterministic — the same bias
 * lands in the same place on every visit — and free of three.js, so it can be
 * tested in Node.
 *
 * Two hemispheres of one sphere: the classic fifty on the left (x < 0),
 * clustered by their first category; the AI-era twelve on the right, clustered
 * by layer. The plane x = 0 is the divide that the twin arcs cross.
 */
export const RADIUS = 4;

/** FNV-1a, then mulberry32 — a small seeded generator per bias id. */
function rng(seed) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const normalize = ([x, y, z]) => {
  const l = Math.hypot(x, y, z) || 1;
  return [x / l, y / l, z / l];
};

// Cluster centres: a ring of directions around the -x axis for the classic
// categories, and a tighter ring around +x for the three AI layers.
const ring = (ids, side, spread, phase) =>
  Object.fromEntries(
    ids.map((id, i) => {
      const a = (i / ids.length) * Math.PI * 2 + phase;
      // A forward lean (+z) turns the clusters towards the default camera, so
      // the first frame shows faces rather than a thin crescent.
      return [id, normalize([side, spread * Math.cos(a), spread * Math.sin(a) + 0.7])];
    })
  );

const CLASSIC = ['social', 'memory', 'belief', 'learning', 'money', 'politics'];
const AI = ['ai-human', 'ai-agent', 'ai-loop'];
const centres = { ...ring(CLASSIC, -1, 0.9, 0.3), ...ring(AI, 1, 0.75, 0.9) };

const MIN_GAP = 0.55;

/**
 * A few rounds of pairwise repulsion, so random scatter never stacks two
 * points on top of each other. Each point keeps its distance from the centre
 * and stays on its own side of the divide.
 */
function relax(nodes, rounds = 40) {
  for (let k = 0; k < rounds; k++) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p = nodes[i].position;
        const q = nodes[j].position;
        const d = [p[0] - q[0], p[1] - q[1], p[2] - q[2]];
        const dist = Math.hypot(...d);
        if (dist >= MIN_GAP || dist === 0) continue;
        const push = ((MIN_GAP - dist) / dist) * 0.5;
        for (let a = 0; a < 3; a++) {
          p[a] += d[a] * push;
          q[a] -= d[a] * push;
        }
      }
    }
    for (const n of nodes) {
      const depth = n.depth;
      const [x, y, z] = normalize(n.position);
      const side = n.ai ? 1 : -1;
      n.position = [Math.sign(x) === side ? x * depth : side * 0.05 * depth, y * depth, z * depth];
    }
  }
  for (const n of nodes) delete n.depth;
}

export const groupOf = (bias) => layerOf(bias) ?? bias.categories[0];

export function layoutBiases(list = biases) {
  const sizes = {};
  for (const b of list) sizes[groupOf(b)] = (sizes[groupOf(b)] ?? 0) + 1;

  const nodes = list.map((b) => {
    const group = groupOf(b);
    const r = rng(b.id);
    // Bigger clusters spread wider so their points don't pile up.
    const spread = 0.16 + 0.07 * Math.sqrt(sizes[group]);
    const [cx, cy, cz] = centres[group];
    const dir = normalize([
      cx + (r() - 0.5) * 2 * spread,
      cy + (r() - 0.5) * 2 * spread,
      cz + (r() - 0.5) * 2 * spread,
    ]);
    // Keep every point on its own side of the divide.
    if (Math.sign(dir[0]) !== Math.sign(cx)) dir[0] = -dir[0] * 0.3;
    const depth = RADIUS * (0.9 + r() * 0.18);
    return {
      id: b.id,
      group,
      color: categoryById[group].color,
      ai: Boolean(layerOf(b)),
      position: dir.map((v) => v * depth),
      depth,
    };
  });

  relax(nodes);

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const links = list.filter((b) => b.twin).map((b) => ({ from: b.twin, to: b.id, color: byId[b.id].color }));

  return { nodes, links };
}
