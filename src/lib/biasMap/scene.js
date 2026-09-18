import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RADIUS } from './layout.js';

/**
 * The bias map as a three.js scene. Loaded only on demand (see BiasMap.jsx), so
 * nothing here ships with the first paint.
 *
 * `mount(container, { nodes, links }, callbacks)` builds the scene inside
 * `container` and returns `{ dispose, setActive, setTheme }`. It throws if
 * WebGL is unavailable; the caller treats that as "no map" and moves on.
 */

function glowTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** An arc from a classic bias to its AI-era twin, bowed away from the centre. */
function arcPoints(from, to) {
  const a = new THREE.Vector3(...from);
  const b = new THREE.Vector3(...to);
  const mid = a.clone().add(b).multiplyScalar(0.5);
  // The midpoint of two points on opposite sides sits near the centre; lift it
  // along its own direction (or up, if it is right at the centre).
  const lift = mid.lengthSq() < 0.01 ? new THREE.Vector3(0, 1, 0) : mid.clone().normalize();
  const control = lift.multiplyScalar(RADIUS * 1.25).add(new THREE.Vector3(0, 0.6, 0));
  return new THREE.QuadraticBezierCurve3(a, control, b).getPoints(48);
}

export function mount(container, { nodes, links }, { onHover, onSelect, reducedMotion, dark }) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 1.2, 12.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  // Zooming would hijack page scroll; panning would lose the map.
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.rotateSpeed = 0.6;
  controls.autoRotate = !reducedMotion;
  controls.autoRotateSpeed = 0.5;

  const world = new THREE.Group();
  scene.add(world);

  // The divide: a ring in the x = 0 plane.
  const divideMaterial = new THREE.LineDashedMaterial({ dashSize: 0.18, gapSize: 0.14, transparent: true });
  const divide = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: 128 }, (_, i) => {
        const a = (i / 128) * Math.PI * 2;
        return new THREE.Vector3(0, Math.cos(a) * RADIUS * 1.12, Math.sin(a) * RADIUS * 1.12);
      })
    ),
    divideMaterial
  );
  divide.computeLineDistances();
  world.add(divide);

  // Points: a solid core plus a soft glow sprite.
  const glow = glowTexture();
  const coreGeometry = new THREE.SphereGeometry(0.11, 16, 12);
  const pickables = [];
  const byId = {};

  for (const n of nodes) {
    const color = new THREE.Color(n.color);
    const core = new THREE.Mesh(coreGeometry, new THREE.MeshBasicMaterial({ color }));
    core.position.set(...n.position);
    core.userData.id = n.id;
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glow, color, transparent: true, depthWrite: false })
    );
    halo.scale.setScalar(n.ai ? 0.95 : 0.7);
    core.add(halo);
    world.add(core);
    pickables.push(core);
    byId[n.id] = { core, halo, node: n, links: [] };
  }

  // Twin arcs.
  for (const l of links) {
    const material = new THREE.LineBasicMaterial({ color: new THREE.Color(l.color), transparent: true });
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(arcPoints(byId[l.from].node.position, byId[l.to].node.position)),
      material
    );
    world.add(line);
    byId[l.from].links.push(line);
    byId[l.to].links.push(line);
  }

  const allLines = world.children.filter((c) => c.isLine && c !== divide);

  let active = null;
  function paint() {
    const partners = new Set();
    if (active) {
      partners.add(active);
      for (const l of links) {
        if (l.from === active) partners.add(l.to);
        if (l.to === active) partners.add(l.from);
      }
    }
    for (const [id, { core, halo, links: own }] of Object.entries(byId)) {
      const on = !active || partners.has(id);
      core.scale.setScalar(id === active ? 1.9 : 1);
      halo.material.opacity = on ? (dark ? 0.9 : 0.55) : 0.12;
      core.material.opacity = on ? 1 : 0.3;
      core.material.transparent = !on;
      for (const line of own) line.userData.hot = line.userData.hot || id === active;
    }
    for (const line of allLines) {
      line.material.opacity = active ? (line.userData.hot ? 1 : 0.08) : dark ? 0.5 : 0.8;
      line.userData.hot = false;
    }
  }

  function setTheme(isDark) {
    dark = isDark;
    divideMaterial.color.set(isDark ? '#3b4253' : '#c6cede');
    divideMaterial.opacity = isDark ? 0.9 : 1;
    paint();
  }
  setTheme(dark);

  function setActive(id) {
    active = id && byId[id] ? id : null;
    paint();
  }

  // Picking: hover highlights, a click (not a drag) opens the bias.
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let down = null;

  function pick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(pickables, false);
    if (hits.length) return hits[0].object.userData.id;
    // Generous hit area: the cores are small, fingers are not.
    let best = null;
    let bestDist = 0.045;
    for (const p of pickables) {
      const s = p.getWorldPosition(new THREE.Vector3()).project(camera);
      const d = Math.hypot(s.x - pointer.x, s.y - pointer.y);
      if (d < bestDist) {
        bestDist = d;
        best = p.userData.id;
      }
    }
    return best;
  }

  function screenOf(id) {
    const rect = renderer.domElement.getBoundingClientRect();
    const v = byId[id].core.getWorldPosition(new THREE.Vector3()).project(camera);
    return { x: ((v.x + 1) / 2) * rect.width, y: ((1 - v.y) / 2) * rect.height };
  }

  let hovered = null;
  const onMove = (event) => {
    if (down && Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5) return;
    const id = pick(event);
    if (id !== hovered) {
      hovered = id;
      setActive(id);
      renderer.domElement.style.cursor = id ? 'pointer' : 'grab';
      controls.autoRotate = !reducedMotion && !id;
    }
    onHover(id ? { id, ...screenOf(id) } : null);
  };
  const onDown = (event) => {
    down = { x: event.clientX, y: event.clientY };
  };
  const onUp = (event) => {
    const moved = down && Math.hypot(event.clientX - down.x, event.clientY - down.y) > 5;
    down = null;
    if (moved) return;
    const id = pick(event);
    if (id) onSelect(id);
  };
  const onLeave = () => {
    hovered = null;
    setActive(null);
    controls.autoRotate = !reducedMotion;
    onHover(null);
  };

  const el = renderer.domElement;
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointerleave', onLeave);

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Pull back on narrow screens so the whole sphere stays in frame.
    camera.position.setLength(width < 560 ? 15.5 : 12.5);
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  // Render only while the map is on screen and the tab is visible.
  let visible = true;
  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  visibility.observe(container);

  let frame = 0;
  const loop = () => {
    frame = requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    controls.update();
    if (hovered) onHover({ id: hovered, ...screenOf(hovered) });
    renderer.render(scene, camera);
  };
  loop();

  function dispose() {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibility.disconnect();
    el.removeEventListener('pointermove', onMove);
    el.removeEventListener('pointerdown', onDown);
    el.removeEventListener('pointerup', onUp);
    el.removeEventListener('pointerleave', onLeave);
    controls.dispose();
    scene.traverse((o) => {
      o.geometry?.dispose();
      o.material?.dispose();
    });
    glow.dispose();
    renderer.dispose();
    el.remove();
  }

  return { dispose, setActive, setTheme };
}
