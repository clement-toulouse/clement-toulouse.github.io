import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { contentFr } from './src/data/content.fr.ts'

/**
 * Substitue dans index.html les tokens dépendant de la config (français : la
 * langue par défaut et celle du prérendu, donc du HTML statique livré) :
 *
 * - `__SITE_URL__` → l'URL absolue du site. Les URL de partage (canonical,
 *   og:image, JSON-LD) doivent être absolues pour que les aperçus de lien
 *   fonctionnent. Les centraliser ici évite de les corriger à sept endroits le
 *   jour où le domaine change.
 * - `__GC_CODE__` → le code GoatCounter (vide = analytics désactivé, le script
 *   gardé dans index.html ne charge alors rien).
 */
function siteConfig() {
  return {
    name: 'site-config',
    transformIndexHtml(html: string) {
      return html
        .replaceAll('__SITE_URL__', contentFr.profile.siteUrl.replace(/\/$/, ''))
        .replaceAll('__GC_CODE__', contentFr.profile.goatCounterCode)
    },
  }
}

export default defineConfig({
  // Site utilisateur GitHub Pages (`<user>.github.io`) : servi à la racine.
  // Pour un dépôt de projet (`<user>.github.io/cv`), mettre base: '/cv/'.
  base: '/',
  plugins: [react(), tailwindcss(), siteConfig()],
})
