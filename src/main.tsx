import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

// Polices auto-hébergées : une requête tierce de moins, et aucune IP visiteur
// envoyée à Google. Inter est chargé en variable (les sous-ensembles non
// latins ne sont jamais téléchargés grâce à unicode-range) ; Instrument Serif
// n'est utilisé qu'en italique dans les accents éditoriaux.
import '@fontsource-variable/inter'
import '@fontsource/instrument-serif/latin-400-italic.css'
import '@fontsource/instrument-serif/latin-ext-400-italic.css'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!

// Le build de production livre déjà le HTML (voir scripts/prerender.mjs) :
// on l'hydrate au lieu de tout re-rendre. En dev, le conteneur est vide.
if (root.hasChildNodes()) {
  hydrateRoot(
    root,
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
