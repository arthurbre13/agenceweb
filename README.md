# ?? DigiCraft Agency - Site Web d'Agence de D?veloppement

Site web moderne et professionnel pour une agence sp?cialis?e dans le d?veloppement web, cr?? avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## ? Fonctionnalit?s

### ?? Design & UX
- **Design moderne et accrocheur** avec animations subtiles
- **Couleurs vives et harmonieuses** (d?grad?s bleu/violet/orange)
- **Typographies ?l?gantes** (Inter & Montserrat)
- **Responsive design** optimis? mobile-first
- **Animations fluides** avec Framer Motion
- **Effets hover** sur boutons et cartes
- **Scroll smooth** et indicateurs de scroll

### ?? Sections du Site

1. **Header Navigation**
   - Logo anim? avec effet de rotation au survol
   - Menu de navigation responsive
   - Menu mobile avec animation
   - CTA visible "Demander un devis"

2. **Hero Section**
   - Fond d?grad? avec ?l?ments anim?s flottants
   - Titre percutant avec slogan diff?renciateur
   - Statistiques cl?s (projets, satisfaction, expertise)
   - Double CTA vers contact et r?alisations
   - Indicateur de scroll anim?

3. **Services**
   - 8 services d?taill?s (d?veloppement web, UX/UI, SEO, etc.)
   - Cartes interactives avec ic?nes color?es
   - Effets de survol ?l?gants
   - CTA vers contact

4. **R?alisations / Portfolio**
   - Galerie interactive avec filtres par cat?gorie
   - 6 projets exemples avec images
   - Animations d'apparition/disparition
   - Tags technologiques
   - Liens vers projets et code source

5. **? propos**
   - Vision et histoire de l'agence
   - 4 valeurs fondamentales avec ic?nes
   - ?quipe de 4 membres avec photos et descriptions
   - Design ?l?gant avec d?grad?s

6. **M?thode de Travail**
   - Processus en 5 ?tapes visuellement repr?sent?
   - Timeline verticale avec num?rotation
   - Design altern? gauche/droite (desktop)
   - Description d?taill?e de chaque phase

7. **T?moignages Clients**
   - 6 t?moignages avec photos et notes 5 ?toiles
   - Citations authentiques
   - Statistiques de satisfaction
   - Design en grille responsive

8. **Blog / Actualit?s**
   - 3 articles r?cents avec images
   - Cat?gories et temps de lecture
   - Meta-donn?es (date, auteur)
   - CTA vers tous les articles

9. **S?curit? & Confidentialit?**
   - Section d?di?e sur fond sombre
   - 4 garanties de s?curit?
   - 6 engagements RGPD
   - Design professionnel et rassurant

10. **Contact**
    - Formulaire fonctionnel avec validation
    - Informations de contact (email, t?l?phone, adresse)
    - Carte interactive (Leaflet)
    - Horaires d'ouverture
    - Message de confirmation

11. **Footer**
    - Liens vers services, entreprise et mentions l?gales
    - Ic?nes r?seaux sociaux avec effets hover
    - Copyright et signature
    - Organisation claire en colonnes

### ? Accessibilit?

- **Navigation clavier** compl?te
- **Labels ARIA** sur tous les ?l?ments interactifs
- **Contraste ?lev?** respectant les normes WCAG
- **Focus visible** pour la navigation
- **Textes alternatifs** sur toutes les images
- **Structure s?mantique** HTML5

### ? Performance & SEO

- **Next.js 14** avec App Router
- **Optimisation des images** automatique
- **Lazy loading** des composants
- **SEO ready** avec m?tadonn?es compl?tes
- **Fonts optimis?es** (Google Fonts)
- **Code splitting** automatique
- **CSS optimis?** avec Tailwind
- **Bundle size r?duit**

### ?? Animations

- **Framer Motion** pour animations fluides
- **Animations au scroll** (scroll-triggered)
- **Transitions CSS** personnalis?es
- **Effets de hover** sur boutons et cartes
- **Animations d'entr?e** pour chaque section
- **?l?ments flottants** en arri?re-plan

## ??? Technologies Utilis?es

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations
- **React Icons** - Biblioth?que d'ic?nes
- **Leaflet** - Cartes interactives
- **React Leaflet** - Int?gration Leaflet pour React

## ?? Installation

```bash
# Installer les d?pendances
npm install

# Lancer le serveur de d?veloppement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## ?? D?ploiement

```bash
# Build de production
npm run build

# D?marrer en production
npm start
```

## ?? Structure du Projet

```
/workspace
??? app/
?   ??? layout.tsx          # Layout principal avec SEO
?   ??? page.tsx            # Page d'accueil
?   ??? globals.css         # Styles globaux
??? components/
?   ??? Header.tsx          # Navigation principale
?   ??? Hero.tsx            # Section hero
?   ??? Services.tsx        # Section services
?   ??? Portfolio.tsx       # Galerie r?alisations
?   ??? About.tsx           # ? propos
?   ??? WorkMethod.tsx      # M?thode de travail
?   ??? Testimonials.tsx    # T?moignages
?   ??? Blog.tsx            # Blog/Actualit?s
?   ??? Security.tsx        # S?curit?
?   ??? Contact.tsx         # Formulaire de contact
?   ??? Map.tsx             # Carte interactive
?   ??? Footer.tsx          # Footer
??? public/                 # Fichiers statiques
??? tailwind.config.js      # Configuration Tailwind
??? tsconfig.json           # Configuration TypeScript
??? next.config.js          # Configuration Next.js
??? package.json            # D?pendances
```

## ?? Palette de Couleurs

- **Primaire**: Bleu (#0ea5e9 - #0369a1)
- **Secondaire**: Violet/Rose (#d946ef - #a21caf)
- **Accent**: Orange (#f97316 - #c2410c)
- **Fond**: Gris clair (#f9fafb)
- **Texte**: Gris fonc? (#111827)

## ?? Personnalisation

### Modifier les couleurs
?ditez `tailwind.config.js` dans la section `theme.extend.colors`

### Changer les contenus
Modifiez directement les tableaux de donn?es dans chaque composant

### Ajouter des sections
Cr?ez un nouveau composant dans `/components` et importez-le dans `app/page.tsx`

## ?? Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Tous les composants sont optimis?s pour ces breakpoints.

## ?? Navigation

- `#accueil` - Hero section
- `#services` - Services
- `#realisations` - Portfolio
- `#about` - ? propos
- `#methode` - M?thode de travail
- `#blog` - Blog
- `#contact` - Contact

## ?? Licence

Ce projet est un template libre d'utilisation pour votre agence web.

## ?? Conseils d'Utilisation

1. **Personnalisez les textes** avec vos propres contenus
2. **Remplacez les images** par vos vraies photos
3. **Configurez le formulaire** de contact avec un service backend
4. **Ajoutez Google Analytics** pour le tracking
5. **Connectez vos vrais r?seaux sociaux**
6. **Optimisez les images** avant d?ploiement
7. **Testez sur diff?rents navigateurs** et appareils

## ?? Support

Pour toute question ou am?lioration, n'h?sitez pas ? ouvrir une issue.

---

**Fait avec ?? pour les agences web fran?aises**