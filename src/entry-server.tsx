import { renderToString } from 'react-dom/server'
import App from './App'

/** Point d'entrée du prérendu (voir scripts/prerender.mjs). */
export function render() {
  return renderToString(<App />)
}
