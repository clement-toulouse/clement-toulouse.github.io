/**
 * Prérendu : injecte le HTML de l'app dans dist/index.html.
 *
 * Sans ça le fichier livré ne contient qu'un <div id="root"> vide — les
 * crawlers de moteurs de recherche et les robots d'aperçu de lien (LinkedIn,
 * Slack, WhatsApp, iMessage) n'y voient aucun contenu. Le client hydrate
 * ensuite ce HTML plutôt que de le reconstruire.
 *
 * Lancé automatiquement par `npm run build`.
 */
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const at = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url))

const { render } = await import(at('dist-ssr/entry-server.js'))
const html = await readFile(at('dist/index.html'), 'utf8')

const marker = '<div id="root"><!--app--></div>'
if (!html.includes(marker)) {
  throw new Error(`Repère "${marker}" introuvable dans dist/index.html`)
}

const app = render()
await writeFile(at('dist/index.html'), html.replace(marker, `<div id="root">${app}</div>`))
await rm(at('dist-ssr'), { recursive: true, force: true })

console.log(`Prérendu : ${(app.length / 1024).toFixed(1)} Ko de HTML injectés`)
