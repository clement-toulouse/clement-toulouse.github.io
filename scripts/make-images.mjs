/**
 * Génère les images du site à partir de l'original `Profil.png` (racine, non servi) :
 *
 *   public/clement.webp / .jpg   Portrait du hero, recadré 4:5 sur le sujet
 *   public/og.jpg                Vignette 1200×630 des aperçus de partage
 *
 * Rejouer après avoir changé la photo ou le titre :  npm run images
 */
import sharp from 'sharp'
import { Resvg } from '@resvg/resvg-js'
import { fileURLToPath } from 'node:url'

const at = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url))

/* ------------------------------------------------------------------ portrait */

// L'original (1600×2400) est un plan large : ce cadrage resserre sur le sujet en ratio 4:5.
const CROP = { left: 28, top: 18, width: 1544, height: 1930 }
const PORTRAIT = { width: 880, height: 1100 }

const portrait = sharp(at('Profil.png')).extract(CROP).resize(PORTRAIT.width, PORTRAIT.height)

await portrait.clone().webp({ quality: 80, effort: 6 }).toFile(at('public/clement.webp'))
await portrait
  .clone()
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(at('public/clement.jpg'))

/* ------------------------------------------------------------------------ og */

const W = 1200
const H = 630

const portraitData = `data:image/jpeg;base64,${(
  await sharp(at('public/clement.jpg')).toBuffer()
).toString('base64')}`

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="0.4">
      <stop offset="0" stop-color="#1d1b18"/>
      <stop offset="0.6" stop-color="#1d1b18"/>
      <stop offset="1" stop-color="#3e4bbf"/>
    </linearGradient>
    <radialGradient id="halo1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#3e4bbf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#3e4bbf" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="halo2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#0e7568" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#0e7568" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f7f5f2"/>
      <stop offset="0.55" stop-color="#f7f5f2" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="photoClip">
      <rect x="760" y="0" width="440" height="${H}"/>
    </clipPath>
  </defs>

  <rect width="${W}" height="${H}" fill="#f7f5f2"/>

  <g clip-path="url(#photoClip)">
    <image xlink:href="${portraitData}" x="700" y="-70" width="560" height="700"
           preserveAspectRatio="xMidYMin slice"/>
    <rect x="760" y="0" width="440" height="${H}" fill="url(#fade)"/>
  </g>

  <ellipse cx="120" cy="90" rx="380" ry="330" fill="url(#halo1)"/>
  <ellipse cx="300" cy="612" rx="420" ry="280" fill="url(#halo2)"/>

  <rect x="80" y="196" width="64" height="4" rx="2" fill="#3e4bbf"/>

  <text x="80" y="176" font-family="Helvetica, Arial, sans-serif" font-size="24"
        font-weight="600" letter-spacing="4" fill="#8a8378">HEAD OF PRODUCT</text>

  <text x="80" y="310" font-family="Helvetica, Arial, sans-serif" font-size="96"
        font-weight="700" letter-spacing="-4" fill="url(#ink)">Clément</text>
  <text x="80" y="404" font-family="Helvetica, Arial, sans-serif" font-size="96"
        font-weight="700" letter-spacing="-4" fill="url(#ink)">Toulouse</text>

  <text x="80" y="474" font-family="Helvetica, Arial, sans-serif" font-size="28"
        fill="#57534b">9+ ans de produit digital B2B &amp; B2C</text>

  <text x="80" y="556" font-family="Helvetica, Arial, sans-serif" font-size="24"
        fill="#8a8378">Groupe Barrière · Vision, delivery, IA appliquée</text>
</svg>
`

const rendered = new Resvg(svg, {
  fitTo: { mode: 'width', value: W },
  font: { loadSystemFonts: true },
})
  .render()
  .asPng()

await sharp(rendered)
  .jpeg({ quality: 88, progressive: true, mozjpeg: true })
  .toFile(at('public/og.jpg'))

console.log('public/clement.webp, public/clement.jpg, public/og.jpg')
