/**
 * Génère les images du site à partir des originaux à la racine (non servis) :
 *
 *   public/clement.webp / .jpg   Portrait recadré 4:5 sur le sujet (fond noir)
 *   public/clement-cutout.webp   Portrait détouré, fond transparent, pour le hero
 *   public/og.jpg                Vignette 1200×630 des aperçus de partage
 *
 * `Profil.png` est la photo brute ; `Profil-detoure.png` en est la version
 * détourée. Le détourage vient d'une segmentation ML faite une fois hors
 * projet (@imgly/background-removal-node) : un seuil sur la luminance ne
 * suffisait pas, le fond du studio ayant par endroits la même valeur que la
 * chemise. La dépendance n'est pas embarquée ici — elle télécharge ~40 Mo de
 * modèles et ne servirait qu'en cas de changement de photo.
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

/* ---------------------------------------------------------- portrait détouré */

// On rogne les bords transparents pour que le sujet remplisse le cadre : le
// composant peut alors le positionner sans marge morte imprévisible.
const trimmed = await sharp(at('Profil-detoure.png'))
  .trim({ threshold: 1 })
  .resize({ width: 900, withoutEnlargement: true })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

// Décontamination du bord. La segmentation laisse des pixels semi-transparents
// dont la couleur contient encore le fond noir du studio : sur une page claire
// ils forment un liseré gris. Pour un pixel d'opacité a, la couleur observée
// vaut `a·F + (1-a)·noir`, donc la vraie couleur du sujet est `C / a`.
{
  const { data, info } = trimmed
  for (let i = 0; i < info.width * info.height; i++) {
    const a = data[i * 4 + 3]
    if (a === 0 || a === 255) continue
    const k = 255 / a
    for (let c = 0; c < 3; c++) {
      data[i * 4 + c] = Math.min(255, Math.round(data[i * 4 + c] * k))
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 88, effort: 6, alphaQuality: 100 })
    .toFile(at('public/clement-cutout.webp'))
}

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
