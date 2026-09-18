import { biasIds } from '../data/biases.js';

/**
 * Results travel in the link itself — `#/result?…` — so sharing needs no
 * server and stores nothing. Anything read back from a link is validated:
 * unknown ids are dropped and numbers are clamped.
 */
const MAX_IDS = 8;

export function resultHash(result) {
  const p = new URLSearchParams();
  if (result.kind === 'game') {
    p.set('k', 'game');
    p.set('s', String(result.score));
    p.set('t', String(result.total));
  } else {
    p.set('k', 'quiz');
    p.set('m', result.mode);
    p.set('t', String(result.total));
  }
  // Bias ids are [a-z-] only, so the list goes in unescaped and stays readable.
  const ids = result.kind === 'quiz' && result.ids.length ? `&b=${result.ids.slice(0, MAX_IDS).join(',')}` : '';
  return `#/result?${p}${ids}`;
}

const int = (v, min, max) => {
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : null;
};

export function readResult(params) {
  if (params.k === 'game') {
    const total = int(params.t, 1, 50);
    const score = total && int(params.s, 0, total);
    return total && score !== null ? { kind: 'game', score, total } : null;
  }
  if (params.k === 'quiz') {
    const total = int(params.t, 1, 50);
    const mode = params.m === 'ai' ? 'ai' : 'human';
    const ids = [...new Set((params.b ?? '').split(','))].filter((id) => biasIds.includes(id)).slice(0, MAX_IDS);
    return total ? { kind: 'quiz', mode, total, ids } : null;
  }
  return null;
}

/** An absolute link to a hash route on this site, without the sharer's own ?lang=. */
export function absoluteLink(hash) {
  return `${location.origin}${location.pathname}${hash}`;
}

// --------------------------------------------------------------- image card

function wrap(ctx, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Draws a 1200×630 card — the size social networks expect — and resolves to a
 * PNG blob. `big` is the headline (a score, or a short title); `items` are the
 * bias names listed under it.
 */
export function drawCard({ brand, eyebrow, big, items = [], footer, colors }) {
  const W = 1200;
  const H = 630;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const font = (weight, size) => `${weight} ${size}px Inter, -apple-system, 'Segoe UI', Roboto, sans-serif`;

  ctx.fillStyle = '#12141c';
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W * 0.85, 0, 0, W * 0.85, 0, W * 0.8);
  glow.addColorStop(0, 'rgba(70,188,198,0.28)');
  glow.addColorStop(1, 'rgba(70,188,198,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // The site's mark: three category bars.
  colors.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect(72 + i * 18, 70, 12, 30);
  });
  ctx.fillStyle = '#e8ebf2';
  ctx.font = font(600, 28);
  ctx.fillText(brand, 140, 96);

  ctx.fillStyle = '#46bcc6';
  ctx.font = font(700, 24);
  ctx.fillText(eyebrow.toUpperCase(), 72, 190);

  ctx.fillStyle = '#ffffff';
  const bigSize = big.length <= 8 ? 150 : 72;
  ctx.font = font(700, bigSize);
  let y = 190 + bigSize + 10;
  const bigLines = wrap(ctx, big, W - 144).slice(0, 2);
  bigLines.forEach((line, i) => ctx.fillText(line, 72, y + i * bigSize * 1.05));
  // The list starts a fixed gap below the last headline baseline.
  y += (bigLines.length - 1) * bigSize * 1.05 + 70;

  // Names drop their "(aka …)" so more fit, and the list stops above the footer.
  ctx.font = font(500, 32);
  ctx.fillStyle = '#a6afc2';
  const short = items.map((name) => name.replace(/\s*\(.*?\)/g, ''));
  const room = Math.max(1, Math.floor((H - 120 - y) / 44) + 1);
  const lines = wrap(ctx, short.join(' · '), W - 144);
  lines.slice(0, room).forEach((line, i) => {
    const last = i === room - 1 && lines.length > room;
    ctx.fillText(last ? `${line} …` : line, 72, y);
    y += 44;
  });

  ctx.fillStyle = '#858ea3';
  ctx.font = font(500, 24);
  ctx.fillText(footer, 72, H - 56);

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
}
