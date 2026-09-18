import * as THREE from 'three';

/**
 * Shared set-up for the mechanism scenes: a transparent WebGL canvas with an
 * orthographic camera whose visible area always contains the box
 * x ∈ [-5, 5], y ∈ [-3, 3], whatever the container's shape.
 *
 * `run(update)` calls `update(dt, t)` every frame while the stage is on screen
 * and the tab is visible; `dispose()` tears everything down.
 */
export const W = 10;
export const H = 6;

export function createStage(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, -10, 10);

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    const half = aspect > W / H ? [(H / 2) * aspect, H / 2] : [W / 2, W / 2 / aspect];
    camera.left = -half[0];
    camera.right = half[0];
    camera.top = half[1];
    camera.bottom = -half[1];
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  let visible = true;
  const visibility = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
  });
  visibility.observe(container);

  let frame = 0;
  let last = 0;
  let t = 0;
  function run(update) {
    const loop = (now) => {
      frame = requestAnimationFrame(loop);
      // Clamp the step so a backgrounded tab does not jump the story ahead.
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!visible || document.hidden) return;
      t += dt;
      update(dt, t);
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(loop);
  }

  function dispose() {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    visibility.disconnect();
    scene.traverse((o) => {
      o.geometry?.dispose();
      if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
      else o.material?.dispose();
    });
    renderer.dispose();
    renderer.domElement.remove();
  }

  return { THREE, renderer, scene, camera, run, dispose };
}

/** A round, soft-edged point sprite, shared by every scene. */
export function dotTexture(THREE) {
  const s = 64;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(s / 2, s / 2, s / 2 - 2, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Points with per-point colour and position, updated in place each frame. */
export function makePoints(THREE, count, size) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  const material = new THREE.PointsMaterial({
    size,
    sizeAttenuation: false,
    vertexColors: true,
    map: dotTexture(THREE),
    transparent: true,
    alphaTest: 0.5,
  });
  const points = new THREE.Points(geometry, material);
  return { points, pos: geometry.attributes.position, col: geometry.attributes.color };
}

export function line(THREE, pts, color, opacity = 1) {
  const g = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y]) => new THREE.Vector3(x, y, 0)));
  return new THREE.Line(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
}

/** Box–Muller normal sample from a uniform generator. */
export function normal(random) {
  const u = 1 - random();
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export const ease = (x) => (x < 0 ? 0 : x > 1 ? 1 : x * x * (3 - 2 * x));
