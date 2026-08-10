// Draws the twelve AI-era icons and rasterises them into `public/icons/`.
//
// The classic fifty were traced from the Visual Capitalist poster; these twelve
// are ours, so their source lives here as geometry rather than as a binary. The
// output has to match the house style set by `process-icons.py`: black line art
// on a transparent 320x320 canvas, which CSS inverts for the dark theme.
//
// Needs `rsvg-convert` (brew install librsvg). Run via `npm run icons`.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SVG_DIR = join(here, '../assets/icons');
const PNG_DIR = join(here, '../public/icons');
const SIZE = 320;

/** A balance scale, tipped toward whichever side is heavier. */
function scale({ heavy }) {
  // The beam pivots around the centre; the heavy pan hangs lower.
  const [ly, ry] = heavy === 'left' ? [145, 115] : [115, 145];
  return `
    <path d="M70 ${ly} L250 ${ry}" />
    <path d="M160 130 v90" />
    <path d="M120 220 h80" />
    <path d="M70 ${ly} v25" />
    <path d="M40 ${ly + 25} q30 30 60 0" />
    <path d="M250 ${ry} v25" />
    <path d="M220 ${ry + 25} q30 30 60 0" />`;
}

/** An arrowhead at (x, y) pointing along `dir`. */
function tip(x, y, dir) {
  const d = {
    right: `M${x - 14} ${y - 11} l14 11 l-14 11`,
    left: `M${x + 14} ${y - 11} l-14 11 l14 11`,
  }[dir];
  return `<path d="${d}" />`;
}

const ICONS = {
  // --- Layer A: a human reasoning about a machine ---
  'algorithm-aversion': `
    <circle cx="88" cy="120" r="24" />
    <path d="M50 200 q38 -50 76 0" />
    <rect x="190" y="105" width="95" height="95" rx="12" />
    <path d="M212 140 h20" /><path d="M243 140 h20" />
    <path d="M212 172 h51" />
    <path d="M143 152 l22 22" /><path d="M165 152 l-22 22" />`,

  'eliza-effect': `
    <rect x="60" y="80" width="200" height="130" rx="14" />
    <path d="M110 210 v34 l34 -34" />
    <path d="M160 186 c-38 -27 -49 -54 -27 -67 c13 -8 24 0 27 9 c3 -9 14 -17 27 -9 c22 13 11 40 -27 67 z" />`,

  'cognitive-offloading': `
    <circle cx="105" cy="150" r="58" />
    <path d="M78 134 q27 -22 54 0" stroke-dasharray="9 9" />
    <path d="M78 166 q27 -22 54 0" stroke-dasharray="9 9" />
    <path d="M172 150 h58" />
    ${tip(232, 150, 'right')}
    <rect x="248" y="112" width="56" height="76" rx="10" />`,

  // The star is claimed by the person with a solid line and reached by the
  // machine with a dashed one: the credit and the work took different routes.
  'competence-misattribution': `
    <path d="M160 122 L167 141 L187 141 L171 153 L177 173 L160 161
             L143 173 L149 153 L133 141 L153 141 Z" />
    <circle cx="74" cy="196" r="26" />
    <path d="M36 262 q38 -46 76 0" />
    <rect x="196" y="180" width="88" height="88" rx="12" />
    <path d="M96 178 L134 155" />
    <path d="M208 172 L188 152" stroke-dasharray="10 9" />`,

  // --- Layer B: a model reasoning on its own ---
  sycophancy: `
    <rect x="38" y="92" width="112" height="82" rx="16" />
    <path d="M68 174 v26 l26 -26" />
    <path d="M64 130 l16 16 l30 -32" />
    <rect x="170" y="92" width="112" height="82" rx="16" />
    <path d="M252 174 v26 l-26 -26" />
    <path d="M196 130 l16 16 l30 -32" />
    <path d="M120 232 h80" />
    ${tip(202, 232, 'right')}`,

  'self-preference-bias': ` ${scale({ heavy: 'left' })}
    <rect x="55" y="104" width="32" height="32" rx="5" />
    <rect x="64" y="113" width="14" height="14" rx="3" />
    <rect x="234" y="74" width="32" height="32" rx="5" />`,

  'verbosity-bias': ` ${scale({ heavy: 'left' })}
    <path d="M44 96 h58" /><path d="M44 110 h58" />
    <path d="M44 124 h58" /><path d="M44 138 h44" />
    <path d="M234 82 h34" /><path d="M234 96 h22" />`,

  'position-bias': `
    <circle cx="94" cy="82" r="9" />
    <rect x="44" y="108" width="100" height="92" rx="12" />
    <path d="M68 152 l18 18 l36 -40" />
    <rect x="176" y="108" width="100" height="92" rx="12" />
    <path d="M62 246 q98 44 196 0" />
    ${tip(74, 246, 'left')}${tip(264, 246, 'right')}`,

  // --- Layer C: the loop between them ---
  // The same wave comes back taller each time round the loop.
  'feedback-loop-amplification': `
    <circle cx="72" cy="160" r="36" />
    <circle cx="248" cy="160" r="36" />
    <path d="M84 126 C 122 74, 198 74, 236 126" />
    ${tip(236, 126, 'right')}
    <path d="M236 194 C 198 246, 122 246, 84 194" />
    ${tip(84, 194, 'left')}
    <path d="M56 162 q8 -10 16 0 q8 10 16 0" />
    <path d="M226 170 q11 -24 22 0 q11 24 22 0" />`,

  'model-collapse': `
    <path d="M34 224 h252" />
    <path d="M44 224 C 98 224, 106 84, 160 84 C 214 84, 222 224, 276 224"
          stroke-dasharray="11 11" />
    <path d="M100 224 C 134 224, 140 124, 160 124 C 180 124, 186 224, 220 224" />`,

  'algorithmic-lock-in': `
    <path d="M120 134 v-20 a40 40 0 0 1 80 0 v20" />
    <rect x="104" y="134" width="112" height="100" rx="16" />
    <circle cx="160" cy="176" r="11" />
    <path d="M160 187 v20" />
    <path d="M34 184 h40" />${tip(76, 184, 'right')}
    <path d="M286 184 h-40" />${tip(244, 184, 'left')}`,

  'machine-groupthink': `
    <rect x="138" y="34" width="44" height="44" rx="7" />
    <path d="M151 47 l18 18" /><path d="M169 47 l-18 18" />
    <path d="M148 82 L72 116" /><path d="M160 82 v34" /><path d="M172 82 L248 116" />
    <rect x="36" y="120" width="66" height="66" rx="9" />
    <path d="M52 152 l12 12 l22 -26" />
    <rect x="127" y="120" width="66" height="66" rx="9" />
    <path d="M143 152 l12 12 l22 -26" />
    <rect x="218" y="120" width="66" height="66" rx="9" />
    <path d="M234 152 l12 12 l22 -26" />
    <path d="M36 216 q124 40 248 0" />`,
};

const wrap = (body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <g fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${body}
  </g>
</svg>
`;

mkdirSync(SVG_DIR, { recursive: true });

for (const [id, body] of Object.entries(ICONS)) {
  const svgPath = join(SVG_DIR, `${id}.svg`);
  writeFileSync(svgPath, wrap(body));
  execFileSync('rsvg-convert', [
    '-w', String(SIZE), '-h', String(SIZE),
    svgPath, '-o', join(PNG_DIR, `${id}.png`),
  ]);
}

console.log(`OK — ${Object.keys(ICONS).length} icons written to assets/icons and public/icons.`);
