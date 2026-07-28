/**
 * Génère le CV A4 en PDF à partir du contenu du site (`src/data/content.fr.ts`),
 * qui reste la source unique de vérité : le CV suit automatiquement les textes.
 *
 *   node scripts/make-cv.mjs            → cv/CV-Clement-Toulouse.pdf
 *   CV_PHONE="06 XX XX XX XX" npm run cv
 *
 * Le téléphone n'est PAS écrit dans le dépôt (public) : il est passé par la
 * variable d'environnement `CV_PHONE`, et omis si elle est absente.
 *
 * Rendu par le Chrome installé sur la machine (aucun Chromium téléchargé).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'
import QRCode from 'qrcode'
import { contentFr as c } from '../src/data/content.fr.ts'

const at = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url))

const CHROME =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const PHONE = process.env.CV_PHONE ?? ''
const OUT = at('cv/CV-Clement-Toulouse.pdf')

/* ------------------------------------------------------------------ polices */
// Embarquées en base64 : Chrome imprime sans accès réseau.
const font = (p) => readFileSync(at(p)).toString('base64')
const inter = font('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')
const serif = font(
  'node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2',
)

/* ---------------------------------------------------------------------- QR */
const qr = await QRCode.toString(c.profile.siteUrl, {
  type: 'svg',
  margin: 0,
  errorCorrectionLevel: 'M',
  color: { dark: '#1d1b18', light: '#00000000' },
})

/* ------------------------------------------------------------------ helpers */
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Met en avant le chiffre en tête de métrique, comme sur le site. */
const METRIC_RE = /^([+\-−]?\d[\d\s .,]*(?:\/\d+)?(?:%|M€|€|k)?)/
const metric = (t) => {
  const m = String(t).match(METRIC_RE)
  if (!m) return esc(t)
  return `<b>${esc(m[1].trimEnd())}</b> ${esc(String(t).slice(m[1].length).trimStart())}`
}

const { profile: p } = c
const siteHost = profileHost(p.siteUrl)
function profileHost(url) {
  return String(url).replace(/^https?:\/\//, '').replace(/\/$/, '')
}

/* -------------------------------------------------------------------- HTML */
const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<style>
  @font-face{font-family:'Inter';src:url(data:font/woff2;base64,${inter}) format('woff2-variations');font-weight:100 900;font-display:block}
  @font-face{font-family:'Instrument Serif';src:url(data:font/woff2;base64,${serif}) format('woff2');font-style:italic;font-weight:400;font-display:block}

  :root{
    --ink:#1d1b18; --soft:#57534b; --mute:#8a8378;
    --iris:#3e4bbf; --mint:#0e7568; --line:#e4e0d9; --canvas:#f7f5f2;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  @page{size:A4;margin:11mm 12mm}
  body{font-family:'Inter',system-ui,sans-serif;color:var(--ink);font-size:9.1pt;line-height:1.42;
       -webkit-font-smoothing:antialiased;letter-spacing:-.005em}
  b{font-weight:650;color:var(--mint)}
  .serif{font-family:'Instrument Serif',Georgia,serif;font-style:italic}

  /* ---- en-tête ---- */
  header{display:flex;gap:10mm;align-items:flex-start;
         border-bottom:1.5px solid var(--ink);padding-bottom:3.5mm;margin-bottom:4mm}
  .id{flex:1;min-width:0}
  h1{font-size:27pt;font-weight:800;letter-spacing:-.035em;line-height:1.02}
  h1 .last{color:var(--iris)}
  .role{font-size:11pt;font-weight:600;margin-top:.8mm;letter-spacing:-.015em}
  .role span{color:var(--mute);font-weight:500}
  .tag{margin-top:2.2mm;font-size:10.5pt;line-height:1.3;color:var(--ink);max-width:118mm}
  .tag em{color:var(--iris);font-style:italic}
  .contact{margin-top:2.6mm;display:flex;flex-wrap:wrap;gap:1.2mm 4.2mm;
           font-size:8.4pt;color:var(--soft)}
  .contact b{color:var(--ink);font-weight:600}

  /* ---- carte QR, reprise de la bannière LinkedIn ---- */
  .qr{width:29mm;flex:none;text-align:center;background:#fff;border:1px solid var(--line);
      border-radius:3.4mm;padding:2.4mm 2.2mm 2mm}
  .qr svg{width:100%;height:auto;display:block}
  .qr .t{font-size:7.2pt;font-weight:700;margin-top:1.4mm;letter-spacing:-.01em}
  .qr .u{font-size:5.5pt;color:var(--iris);margin-top:.3mm;white-space:nowrap;line-height:1.2}

  /* ---- chiffres clés ---- */
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:2.6mm;margin-bottom:4mm}
  .stat{border:1px solid var(--line);border-radius:2.6mm;padding:2.2mm 2.4mm;background:var(--canvas)}
  .stat .v{font-size:15pt;font-weight:800;letter-spacing:-.03em;line-height:1}
  .stat .l{font-size:7.5pt;font-weight:650;margin-top:.8mm;line-height:1.22}
  .stat .d{font-size:6.8pt;color:var(--mute);margin-top:.8mm;line-height:1.25}
  .iris{color:var(--iris)} .mint{color:var(--mint)} .ember{color:#a25711}

  /* ---- sections ---- */
  h2{font-size:7.6pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
     color:var(--mute);margin:0 0 2.2mm;padding-bottom:1mm;border-bottom:1px solid var(--line)}
  /* Pas de break-inside:avoid sur les gros blocs : il forçait des sauts et
     laissait des pages à moitié vides. On protège seulement les petites unités
     et on évite d'orpheliner un intertitre de sa liste. */
  section{margin-bottom:4mm}

  .job{margin-bottom:3.4mm}
  .job:last-child{margin-bottom:0}
  .jhead{display:flex;justify-content:space-between;align-items:baseline;gap:4mm}
  .co{font-size:11pt;font-weight:750;letter-spacing:-.02em}
  .per{font-size:7.8pt;color:var(--mute);font-weight:600;white-space:nowrap}
  .ctx{font-size:7.8pt;color:var(--mute);margin-top:.2mm}
  .rt{font-size:9.2pt;font-weight:680;margin-top:1.6mm}
  .rt span{font-weight:500;color:var(--mute);font-size:8pt}
  .sum{font-size:8.6pt;color:var(--soft);margin-top:.8mm;line-height:1.38}
  ul{list-style:none;margin-top:1mm}
  li{position:relative;padding-left:3.1mm;font-size:8.6pt;line-height:1.38;
     color:var(--soft);margin-bottom:.5mm;break-inside:avoid}
  li::before{content:'';position:absolute;left:0;top:1.55mm;width:1.05mm;height:1.05mm;
             border-radius:50%;background:var(--iris)}
  li.win::before{background:var(--mint)}
  .wh{font-size:8.6pt;font-weight:650;color:var(--ink);margin-top:1.4mm;break-after:avoid}
  .jhead,.rt{break-after:avoid}
  /* Intertitre des responsabilités : sans lui, le périmètre produit et les
     responsabilités se lisaient comme une seule liste de 8 puces. */
  .lbl{font-size:6.9pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
       color:var(--mute);margin-top:1.8mm;break-after:avoid}

  /* ---- bas de page : compétences / formation / langues ---- */
  .grid3{display:grid;grid-template-columns:1.25fr 1fr .8fr;gap:5mm}
  .chips{display:flex;flex-wrap:wrap;gap:1.2mm}
  .chip{font-size:7.6pt;border:1px solid var(--line);background:var(--canvas);
        border-radius:99px;padding:.7mm 2mm;color:var(--soft)}
  .sk{font-size:7.8pt;font-weight:700;margin:1.6mm 0 1mm;letter-spacing:-.01em}
  .sk:first-child{margin-top:0}
  .row{display:flex;justify-content:space-between;gap:3mm;margin-bottom:1.4mm}
  .row .n{font-size:8.2pt;font-weight:640;line-height:1.25}
  .row .s{font-size:7.4pt;color:var(--mute);line-height:1.25}
  .row .p{font-size:7.4pt;color:var(--mute);white-space:nowrap}
</style></head><body>

<header>
  <div class="id">
    <h1>${esc(p.firstName)} <span class="last">${esc(p.lastName)}</span></h1>
    <p class="role">${esc(p.role)} <span>· ${esc(p.company)}</span></p>
    <p class="tag">${esc(c.profile.tagline[0])}
      <span class="serif">${highlight(c.profile.tagline[1], c.profile.taglineHighlight)}</span></p>
    <p class="contact">
      <span><b>${esc(p.email)}</b></span>
      ${PHONE ? `<span><b>${esc(PHONE)}</b></span>` : ''}
      <span>${esc(profileHost(p.linkedin))}</span>
      <span>${esc(siteHost)}</span>
      <span>${esc(p.location)}</span>
    </p>
  </div>
  <div class="qr">
    ${qr}
    <div class="t">Mon CV interactif</div>
    <div class="u">${esc(siteHost)}</div>
  </div>
</header>

<div class="stats">
  ${c.stats
    .map(
      (s) => `<div class="stat">
        <div class="v ${s.accent ?? 'iris'}">${esc((s.prefix ?? '') + String(s.value).replace('.', ',') + s.suffix)}</div>
        <div class="l ${s.accent ?? 'iris'}">${esc(s.label)}</div>
        <div class="d">${esc(s.detail)}${s.note ? ` · ${esc(s.note)}` : ''}</div>
      </div>`,
    )
    .join('')}
</div>

<section>
  <h2>Parcours</h2>
  ${c.experience.items
    .map(
      (x) => `<div class="job">
      <div class="jhead">
        <div class="co">${esc(x.company)}</div>
        <div class="per">${esc(x.period)}</div>
      </div>
      ${x.context ? `<div class="ctx">${esc(x.context)}</div>` : ''}
      ${x.roles
        .map(
          (r) => `<div class="rt">${esc(r.title)}${r.duration ? ` <span>· ${esc(r.duration)}</span>` : ''}</div>
          <div class="sum">${esc(r.summary)}</div>
          ${
            r.summaryPoints
              ? `<ul>${r.summaryPoints.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`
              : ''
          }`,
        )
        .join('')}
      ${
        x.responsibilities
          ? `<div class="lbl">${esc(c.experience.responsibilitiesLabel)}</div>
             <ul>${x.responsibilities.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>`
          : ''
      }
      ${x.wins
        .map(
          (w) => `<div class="wh">${esc(w.headline)}</div>
          <ul>${w.metrics.map((m) => `<li class="win">${metric(m)}</li>`).join('')}</ul>`,
        )
        .join('')}
    </div>`,
    )
    .join('')}
</section>

<div class="grid3">
  <section>
    <h2>Compétences</h2>
    ${c.skills
      .map(
        (g) => `<div class="sk">${esc(g.group)}</div>
        <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join('')}</div>`,
      )
      .join('')}
  </section>
  <section>
    <h2>${esc(c.educationLabel)}</h2>
    ${c.education
      .map(
        (e) => `<div class="row"><div>
          <div class="n">${esc(e.title)}</div><div class="s">${esc(e.detail)}</div>
        </div><div class="p">${esc(e.period)}</div></div>`,
      )
      .join('')}
  </section>
  <section>
    <h2>${esc(c.languagesLabel)}</h2>
    ${c.languages
      .map(
        (l) => `<div class="row"><div>
          <div class="n">${esc(l.name)}</div><div class="s">${esc(l.level)}</div>
        </div></div>`,
      )
      .join('')}
  </section>
</div>

</body></html>`

/** Colore les mots clés de l'accroche, comme le hero du site. */
function highlight(text, words) {
  const safe = esc(text)
  if (!words?.length) return safe
  return safe.replace(new RegExp(`\\b(${words.join('|')})\\b`, 'g'), '<em>$1</em>')
}

/* --------------------------------------------------------------------- PDF */
mkdirSync(at('cv'), { recursive: true })

// `CV_DEBUG=1` écrit le HTML intermédiaire : pratique pour ajuster la mise en
// page dans un navigateur sans régénérer le PDF à chaque essai.
if (process.env.CV_DEBUG) writeFileSync(at('cv/cv.html'), html)

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--force-color-profile=srgb'],
})
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
await page.evaluateHandle('document.fonts.ready')
await page.pdf({ path: OUT, format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()

console.log(`${OUT}${PHONE ? '' : '  (sans téléphone : définir CV_PHONE)'}`)
