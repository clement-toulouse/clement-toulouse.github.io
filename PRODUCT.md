# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruteurs, hiring managers et dirigeants qui évaluent Clément Toulouse pour un
poste de Head of Product / VP Product. Ils arrivent depuis LinkedIn, depuis un
échange direct, ou en scannant le QR code de son CV papier. Beaucoup survolent
la page moins d'une minute avant de décider s'ils écrivent.

Audience secondaire : pairs produit et réseau professionnel, qui utilisent le
site comme référence de qui il est et de ce qu'il sait faire.

## Product Purpose

CV en ligne d'une seule page qui doit faire deux choses en même temps :
transmettre le parcours et les résultats, et **être lui-même la démonstration**
du craft revendiqué. Le visiteur doit être impressionné par l'objet autant que
par son contenu. Succès : il retient le profil et prend contact.

## Positioning

La combinaison de trois axes, qu'aucun ne suffit à résumer seul :

1. **Un Head of Product qui construit** — il code, prototype et déploie
   lui-même ; ce site en est la preuve directe.
2. **Un impact chiffré** — chaque affirmation est adossée à un nombre réel.
3. **L'IA dans le process produit** — agents de spécification, discovery,
   release notes déployés pour ses équipes, pas une couche marketing.

C'est cette intersection qui est difficile à copier : un profil produit senior
qui prouve sa maîtrise technique par l'artefact que le visiteur est en train de
regarder.

## Operating Context

- Page unique, consultée aussi bien sur desktop que sur mobile.
- Lecture souvent rapide et non linéaire : le visiteur scanne avant de lire.
- Le même contenu alimente un CV A4 en PDF généré par script.
- Site public, indexé, partagé via aperçus sociaux (Open Graph).

## Capabilities and Constraints

- **Contenu bilingue FR/EN**, dans deux fichiers miroirs typés
  (`src/data/content.fr.ts` / `.en.ts`) : le compilateur échoue si l'un dérive
  de l'autre. Les composants ne contiennent aucun texte en dur.
- **Prérendu au build** puis hydraté : le premier rendu doit être identique côté
  serveur et client. Rien ne peut lire `localStorage`, `matchMedia` ou `window`
  pendant le rendu.
- **Aucune bibliothèque d'animation** (GSAP et Lenis ont été retirés
  délibérément). Les animations vivent en CSS ; le JS se limite à basculer une
  classe ou à écrire des variables CSS, via une unique boucle rAF partagée.
- Déploiement GitHub Pages à chaque push sur `main` (lint, typecheck, build,
  prérendu).
- Le contenu et les chiffres actuels sont **figés** : la refonte change la forme,
  pas le fond. Le bilingue reste.
- La structure des sections, leur ordre et le récit peuvent en revanche être
  entièrement repensés (carte blanche confirmée).

## Brand Commitments

- Nom, photo réelle et employeurs réels (Groupe Barrière, Partoo, IpsoSenso)
  avec leurs logos.
- Ton factuel et sobre : les affirmations sont adossées à des chiffres, jamais
  au superlatif.
- Bilingue FR/EN, français par défaut et prérendu.
- **Le monde visuel reste celui de la catégorie**, choisi explicitement par
  Clément face à quatre mondes alternatifs proposés : fond crème chaud,
  typographie display contrastée avec accents en serif italique, un accent iris
  dominant, surfaces vitrées, révélations au scroll. Cette convention est un
  engagement durable, pas un défaut faute de mieux : la refonte l'exécute à
  pleine fidélité plutôt que de la remplacer.
- **Barre de craft : Linear, Stripe, et les sites personnels de design
  engineers.** L'effet recherché naît de la précision d'exécution — typographie
  millimétrée, profondeur et mouvement orchestrés, micro-détails que seuls les
  gens du métier repèrent — jamais d'un dépaysement stylistique.

## Evidence on Hand

Chiffres réels, déjà validés et à ne jamais inventer ni arrondir :

- 60 k utilisateurs actifs mensuels sur Barrière Play (40 % des clients du
  groupe, +2 %/mois) ; 8 M€ chargés par mois sur les wallets (+10 %/mois).
- −30 % de demandes au support grâce au chatbot IA interne (95 % de réponses
  justes, 30 utilisateurs quotidiens).
- 4,2/5 de satisfaction collaborateur sur CZAM (27 casinos équipés, 300+
  utilisateurs).
- Partoo : −60 % de temps d'onboarding, +40 % d'informations publiées, +30 % de
  taux de réponse aux avis, 70 % d'adoption à 3 mois, 95 % de réussite sur les
  nouveaux canaux.

Autres preuves disponibles : captures réelles de Barrière Play et du tableau de
bord Partoo (`public/experience/`), portrait détouré (`public/clement-cutout.webp`),
projet personnel Savor (PWA en ligne), certifications AI Discipline, diplôme ECE
Paris.

Absences à respecter : aucun témoignage, aucun logo client, aucune récompense.
Ne pas en fabriquer.

## Product Principles

1. **Le chiffre avant l'adjectif.** Toute affirmation forte s'appuie sur une
   donnée vérifiable présente dans le contenu.
2. **Le site est une pièce du dossier.** Sa qualité d'exécution est un argument
   au même titre que le texte ; une approximation visible contredit le propos.
3. **Lisible en survol.** Un recruteur pressé doit repartir avec le profil même
   s'il ne lit qu'un écran.
4. **Le contenu est la source unique.** Deux fichiers miroirs alimentent le site
   et le PDF ; rien ne se duplique dans les composants.
5. **Rien ne casse sans JS ni sans animation.** Le prérendu reste lisible, et
   `prefers-reduced-motion` neutralise le mouvement.

## Accessibility & Inclusion

- `prefers-reduced-motion` doit désactiver l'ensemble des animations.
- Contenu entièrement lisible sans JavaScript (prérendu), y compris les
  éléments révélés au scroll.
- Lien d'évitement clavier, textes alternatifs sur toutes les images, contraste
  suffisant dans les deux thèmes (clair par défaut, sombre disponible).
