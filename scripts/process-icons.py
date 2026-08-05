#!/usr/bin/env python3
"""One-off migration step 3: make the bias icons theme-friendly.

The source PNGs are grey line art on an opaque white background, which shows up
as a white box on a dark card. This rewrites each icon so that:

  * the white background becomes fully transparent (alpha derived from
    luminance, so anti-aliased edges survive),
  * the ink is pure black, letting CSS tint it per theme via `invert()`,
  * the artwork is cropped to its bounding box and centred on a square canvas,
    so every card shows an icon at the same visual weight.
"""

import sys
from pathlib import Path

from PIL import Image

ICON_DIR = Path(__file__).resolve().parent.parent / "public" / "icons"
CANVAS = 320             # output size, px (square)
PAD_RATIO = 0.07         # breathing room around the artwork
WHITE_CUTOFF = 250       # luminance at/above this is treated as background
MIN_HEIGHT_RATIO = 0.62  # short/wide artwork is scaled up to at least this tall


def process(path: Path) -> tuple[int, int]:
    src = Image.open(path).convert("RGBA")
    w, h = src.size
    px = src.load()

    ink = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    ipx = ink.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lum = (r * 299 + g * 587 + b * 114) // 1000
            if lum >= WHITE_CUTOFF:
                continue
            # Darker pixel -> more opaque ink.
            alpha = 255 - lum
            ipx[x, y] = (0, 0, 0, min(255, alpha * a // 255))

    bbox = ink.getbbox()
    if bbox is None:                      # fully blank; leave the file alone
        return src.size

    art = ink.crop(bbox)
    inner = int(CANVAS * (1 - 2 * PAD_RATIO))

    # Fit inside the square, then give short/wide artwork a nudge upward so a
    # squat icon (a row of stones) does not read as tiny next to a tall one.
    scale = min(inner / art.width, inner / art.height)
    if art.height * scale < inner * MIN_HEIGHT_RATIO:
        scale = min(inner * MIN_HEIGHT_RATIO / art.height, inner / art.width)
    art = art.resize((max(1, round(art.width * scale)), max(1, round(art.height * scale))), Image.LANCZOS)

    out = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    out.paste(art, ((CANVAS - art.width) // 2, (CANVAS - art.height) // 2))
    out.save(path, "PNG", optimize=True)
    return src.size


def main() -> int:
    icons = sorted(ICON_DIR.glob("*.png"))
    if not icons:
        print(f"no icons found in {ICON_DIR}", file=sys.stderr)
        return 1

    before = sum(p.stat().st_size for p in icons)
    for path in icons:
        process(path)
    after = sum(p.stat().st_size for p in icons)

    print(f"processed {len(icons)} icons")
    print(f"  {before / 1024:.0f} KB -> {after / 1024:.0f} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
