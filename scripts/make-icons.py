#!/usr/bin/env python3
"""Generate the site's favicon and app icons from the theme colors.

Reads `ink` (background) and `blue` (primary accent) from src/theme/theme.ts and
draws a solid "K" in ink on an accent square, so the icons follow the theme.

Usage (needs Pillow: `pip install pillow`):
    python3 scripts/make-icons.py
"""
import re
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
THEME = (ROOT / 'src/theme/theme.ts').read_text()


def theme_color(name: str) -> str:
    match = re.search(rf"^const {name} = '(#[0-9a-fA-F]{{6}})'", THEME, re.M)
    if not match:
        raise SystemExit(f'make-icons: could not find `const {name}` in theme.ts')
    return match.group(1)


INK = theme_color('ink')
ACCENT = theme_color('blue')


# --- Geometry: a 100x100 box, the K spans x 18-82 and y 18-82 -------------

def clip(poly, a, b, c):
    """Keep the part of convex polygon `poly` where a*x + b*y <= c."""
    out = []
    for i, p in enumerate(poly):
        q = poly[(i + 1) % len(poly)]
        fp = a * p[0] + b * p[1] - c
        fq = a * q[0] + b * q[1] - c
        if fp <= 0:
            out.append(p)
        if (fp < 0) != (fq < 0):
            t = fp / (fp - fq)
            out.append((p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])))
    return out


def region(*halfplanes):
    poly = [(-50, -50), (150, -50), (150, 150), (-50, 150)]
    for h in halfplanes:
        poly = clip(poly, *h)
    return poly


TOP, BOTTOM = 18, 82
K_SHAPES = [
    [(18, TOP), (36, TOP), (36, BOTTOM), (18, BOTTOM)],  # stem
    # arm: 45-degree band x+y in [76, 100], tucked into the stem
    region((1, 1, 100), (-1, -1, -76), (0, -1, -TOP), (0, 1, BOTTOM), (-1, 0, -27)),
    # leg: 45-degree band x-y in [-24, 0], starting under the arm's centre line
    region((1, -1, 0), (-1, 1, 24), (0, 1, BOTTOM), (-1, -1, -88)),
]


def scaled(shapes, factor):
    return [[(50 + (x - 50) * factor, 50 + (y - 50) * factor) for x, y in poly] for poly in shapes]


# --- Output -----------------------------------------------------------------

def png(size: int, radius: float, k_scale: float = 1.0) -> Image.Image:
    ss = max(4, 1024 // size)  # supersample, then downscale for clean edges
    n = size * ss
    unit = n / 100
    img = Image.new('RGBA', (n, n), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle([0, 0, n - 1, n - 1], radius=radius * unit, fill=ACCENT)
    for poly in scaled(K_SHAPES, k_scale):
        draw.polygon([(x * unit, y * unit) for x, y in poly], fill=INK)
    return img.resize((size, size), Image.LANCZOS)


def svg(radius: float) -> str:
    paths = ''.join(
        '<path d="M' + ' L'.join(f'{x:.2f} {y:.2f}' for x, y in poly) + 'Z"/>' for poly in K_SHAPES
    )
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'
        f'<rect width="100" height="100" rx="{radius}" fill="{ACCENT}"/>'
        f'<g fill="{INK}">{paths}</g></svg>\n'
    )


def main() -> None:
    img = PUBLIC / 'img'
    rounded = 22  # corner radius, % of the icon

    (PUBLIC / 'favicon.svg').write_text(svg(rounded))

    sizes = [16, 32, 48]
    icos = [png(s, rounded) for s in sizes]
    icos[-1].save(PUBLIC / 'favicon.ico', sizes=[(s, s) for s in sizes], append_images=icos[:-1])

    png(192, rounded).save(img / 'icon-192.png', optimize=True)
    png(512, rounded).save(img / 'icon-512.png', optimize=True)
    # Maskable: full-bleed square, K shrunk into the 80% safe zone.
    png(512, 0, k_scale=0.78).save(img / 'icon-512-maskable.png', optimize=True)
    # iOS rounds the corners itself and shows transparency as black.
    png(180, 0).convert('RGB').save(img / 'apple-touch-icon.png', optimize=True)

    print(f'make-icons: accent {ACCENT}, ink {INK} -> favicon.svg, favicon.ico, '
          'img/icon-192.png, img/icon-512.png, img/icon-512-maskable.png, img/apple-touch-icon.png')


if __name__ == '__main__':
    main()
