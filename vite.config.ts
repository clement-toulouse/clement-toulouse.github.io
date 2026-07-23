import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { profile } from './src/data/profile.ts'

/**
 * Remplace `__SITE_URL__` dans index.html par `profile.siteUrl`.
 *
 * Les URL de partage (canonical, og:image, JSON-LD) doivent être absolues pour
 * que les aperçus de lien fonctionnent. Les centraliser ici évite d'avoir à les
 * corriger à sept endroits le jour où le domaine change.
 */
function siteUrl() {
  return {
    name: 'site-url',
    transformIndexHtml(html: string) {
      return html.replaceAll('__SITE_URL__', profile.siteUrl.replace(/\/$/, ''))
    },
  }
}

export default defineConfig({
  // Site utilisateur GitHub Pages (`<user>.github.io`) : servi à la racine.
  // Pour un dépôt de projet (`<user>.github.io/cv`), mettre base: '/cv/'.
  base: '/',
  plugins: [react(), tailwindcss(), siteUrl()],
})
