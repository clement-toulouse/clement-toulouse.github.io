# Site CV · Clément Toulouse

Portfolio one-page développé en local : React 19 + TypeScript + Vite, Tailwind v4.
Aucune dépendance d'animation : tout est en CSS, piloté par IntersectionObserver.
Le HTML est prérendu au build pour être lisible sans JavaScript.

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:5173.

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement avec HMR |
| `npm run build` | Build de production prérendu dans `dist/` |
| `npm run preview` | Sert le build de production en local |
| `npm run lint` | oxlint |
| `npm run images` | Régénère portrait + vignette de partage |

## Où modifier le contenu

Le site est bilingue (français par défaut, anglais en option). Tout le contenu
éditorial vit dans deux fichiers miroirs : [`src/data/content.fr.ts`](src/data/content.fr.ts)
et [`src/data/content.en.ts`](src/data/content.en.ts) — identité, chiffres d'impact,
expériences, cartes IA, projet perso, compétences, formation, langues, items de nav.
Les deux respectent la forme définie dans [`src/data/content.types.ts`](src/data/content.types.ts)
(interface `SiteContent`) : TypeScript signale si l'un des deux fichiers oublie un champ.
Aucun texte n'est en dur dans les composants, qui lisent `useLanguage().t` — on peut
donc faire évoluer le CV, dans une langue ou dans les deux, sans toucher au layout.

Les métadonnées de partage et le balisage `schema.org/Person` vivent dans
[`index.html`](index.html), toujours en français (voir « Internationalisation »
ci-dessous) — à mettre à jour en même temps que `content.fr.ts`.

## Prérendu

`npm run build` enchaîne trois étapes :

1. `vite build` produit le bundle client ;
2. `vite build --ssr src/entry-server.tsx` compile l'app pour Node ;
3. `scripts/prerender.mjs` la rend en HTML et l'injecte dans `dist/index.html`.

Sans ça, le fichier livré ne contiendrait qu'un `<div id="root">` vide : les
crawlers et les robots d'aperçu de lien (LinkedIn, Slack, WhatsApp, iMessage)
n'y verraient aucun contenu. Le client **hydrate** ce HTML au lieu de le
reconstruire ([`src/main.tsx`](src/main.tsx)).

Conséquence à garder en tête : le premier rendu doit être identique côté serveur
et côté client. C'est pourquoi le thème est posé sur `<html>` par un script
inline avant le premier paint, et pourquoi le bouton de thème rend ses deux
icônes en laissant le CSS choisir — plutôt que de dépendre d'un état React.

## Images

`npm run images` régénère depuis `Profil.png` (original conservé à la racine,
non servi) via [`scripts/make-images.mjs`](scripts/make-images.mjs) :

- `public/clement.webp` / `.jpg` — portrait recadré 4:5 sur le sujet, 880×1100 ;
- `public/og.jpg` — vignette 1200×630 des aperçus de partage.

Si le portrait est absent, le site affiche un monogramme dégradé plutôt qu'une
image cassée. Chemins configurables dans `content.fr.ts` / `content.en.ts`
(identiques dans les deux, ce sont des données, pas du texte à traduire).

### Logos des entreprises

Le bandeau défilant du parcours ([`CompanyMarquee`](src/components/CompanyMarquee.tsx))
lit la liste `companies` du contenu courant et charge un logo depuis
`public/logos/<slug>.png` — posé dans une pastille blanche pour homogénéiser des
fonds hétérogènes. Si le fichier manque, le nom s'affiche en toutes lettres
(repli gracieux, cf. [`CompanyLogo`](src/components/ui/CompanyLogo.tsx)).

Pour ajouter ou remplacer un logo : détourer le fond, normaliser à ~128 px de
haut, déposer le PNG sous le bon `slug`. Exemple avec `sharp` :

```bash
node --input-type=module -e "import('sharp').then(({default:s})=>s('mon-logo.png').trim({threshold:12}).flatten({background:'#fff'}).resize({height:128}).png().toFile('public/logos/<slug>.png'))"
```

## Architecture

```
scripts/
├── prerender.mjs            Injection du HTML dans dist/index.html
└── make-images.mjs          Portrait + vignette Open Graph
src/
├── data/
│   ├── content.types.ts     Forme du contenu (interface SiteContent)
│   ├── content.fr.ts        Contenu français (langue par défaut, celle du prérendu)
│   ├── content.en.ts        Contenu anglais
│   └── content.ts           Barrel : { fr, en } indexé par locale
├── i18n/LanguageContext.tsx Contexte + hook useLanguage() ({ locale, setLocale, t })
├── entry-server.tsx         Point d'entrée du prérendu
├── hooks/useMotion.ts       Reveal, compteurs, section active, parallaxe
├── components/
│   ├── Nav.tsx              Nav flottante, progression, menu mobile, thème
│   ├── Hero.tsx             Titre, portrait, halos en parallaxe
│   ├── Marquee.tsx          Bande défilante
│   ├── Impact.tsx           Chiffres animés + manifeste
│   ├── AiSection.tsx        Claude Code / Dust / IA Ops (bento)
│   ├── Experience.tsx       Timeline Barrière / Partoo / IpsoSenso
│   ├── Savor.tsx            Projet perso
│   ├── Profil.tsx           Compétences, formation, langues
│   ├── Contact.tsx          Footer
│   └── ui/                  SplitHeading, Magnetic, Tilt, Spotlight, Portrait, Icon…
└── index.css                Tokens de design, animations, composants CSS
```

## Design system

Structure issue de [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
(pattern *Portfolio Grid*, style *Bento Grids*), déclinée dans une direction sobre
et professionnelle : blanc tamisé légèrement chaud, encre presque noire, un accent
principal encre.

Les tokens vivent dans le bloc `@theme` et les variables `--c-*` de `src/index.css` :
changer `--c-canvas`, `--c-ink` & co. suffit à repeindre tout le site. Les accents
ont des valeurs distinctes par thème : tons profonds sur fond clair, tons adoucis
sur fond sombre.

Fond `#F7F5F2` (blanc tamisé), accent principal `#3E4BBF` (indigo encre), soutiens
`#0E7568` (teal) et `#A75A12` (ambre). Typographie auto-hébergée via `@fontsource` :
Inter (UI) + Instrument Serif (accents éditoriaux).

**Le clair est le défaut**, quelle que soit la préférence système ; seul un choix
explicite via le bouton est mémorisé dans `localStorage`. Un thème sombre assorti
(charbon chaud) reste disponible. Pour suivre l'OS à la place, une ligne à changer
dans le script inline de `index.html`.

## Animations

Il n'y a pas de moteur d'animation embarqué. Le JS se contente d'ajouter la
classe `is-in` quand un élément entre dans le viewport ; les transitions,
décalages et keyframes sont dans `src/index.css`. Le parallaxe du hero tourne dans
une unique boucle `requestAnimationFrame` qui n'écrit que des `transform` ; le
tilt du portrait et les boutons magnétiques sont pilotés par les événements
pointer, désactivés au tactile et en `prefers-reduced-motion`.

Le scroll fluide est celui du navigateur (`scroll-behavior: smooth`).

## Internationalisation

Le sélecteur de langue est dans le header (bouton `FR`/`EN`, affiche la langue
vers laquelle on bascule). Le français est la langue par défaut **et** celle du
prérendu — même schéma que le thème :

- Premier rendu serveur et client toujours en français (`<html lang="fr">`),
  pour que le HTML statique livré aux crawlers et aux robots d'aperçu de lien
  reste identique à ce que React hydrate. `LanguageProvider` part de `locale: 'fr'`.
- La préférence enregistrée (`localStorage`) n'est appliquée qu'après le montage.
  Un visiteur revenant en anglais voit donc un bref instant de français avant la
  bascule — le compromis accepté pour un site sans routage par locale : il n'y a
  pas de version anglaise prérendue à servir directement.
- Au changement de langue, `document.documentElement.lang` et `document.title`
  sont mis à jour ; les métadonnées de partage (`og:*`, JSON-LD) dans `index.html`,
  elles, restent en français dans tous les cas — elles ne sont lues qu'au moment
  du prérendu, jamais régénérées côté client.

Pour ajouter un champ de contenu : l'ajouter dans `content.types.ts`, puis dans
les deux fichiers `content.fr.ts` / `content.en.ts` — TypeScript refuse le build
si l'un des deux fichiers ne respecte plus la forme de `SiteContent`.

## Accessibilité

- `prefers-reduced-motion` neutralise animations, marquee et parallaxe, et force
  l'affichage de tout contenu autrement masqué.
- Repli `@media (scripting: none)` : sans JavaScript, rien ne reste invisible.
- Les compteurs contiennent la **vraie valeur** dans le DOM ; ils ne repartent de
  zéro que si l'animation peut effectivement se jouer.
- Icônes SVG (aucun emoji), `aria-label` sur les boutons icône, lien d'évitement,
  focus visible conservé, `inert` sur le menu mobile fermé, Échap pour le fermer.
- Les titres découpés caractère par caractère exposent le texte complet via `aria-label`.

## Déploiement

Hébergé sur **GitHub Pages**, gratuitement. Chaque `git push` sur `main` déclenche
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) : lint, typecheck,
build, prérendu, publication. Aucune commande manuelle.

```bash
git add -A && git commit -m "…" && git push
```

L'avancement est visible dans l'onglet **Actions** du dépôt ; la mise en ligne
prend une à deux minutes.

### Changer de domaine

`profile.siteUrl` dans [`src/data/content.fr.ts`](src/data/content.fr.ts) est la
**seule** ligne à modifier (le français est la langue du prérendu, donc du HTML
statique livré — voir « Internationalisation »). Le plugin `site-url` de
[`vite.config.ts`](vite.config.ts) injecte la valeur dans `index.html` à la place
de `__SITE_URL__` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD) — ces
URL doivent être absolues pour que les aperçus de lien fonctionnent.

Pour un dépôt de projet servi dans un sous-dossier (`user.github.io/cv`), passer
aussi `base: '/cv/'` dans `vite.config.ts`.

Le build reste un dossier statique : `npm run build` puis servir `dist/` marche
tout aussi bien sur Vercel, Netlify ou tout autre hébergeur.
