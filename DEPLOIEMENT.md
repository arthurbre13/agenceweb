# ?? Guide de D?ploiement sur Vercel

Ce guide vous explique comment d?ployer votre site **DigiCraft Agency** sur Vercel en quelques minutes.

## ?? Pr?requis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit) - [vercel.com](https://vercel.com)
- Git install? sur votre machine

## ?? M?thode 1 : D?ploiement via GitHub (Recommand?e)

### ?tape 1 : Pr?parer le projet

```bash
# V?rifier que tout fonctionne localement
npm install
npm run build

# Si le build r?ussit, vous ?tes pr?t !
```

### ?tape 2 : Cr?er un d?p?t GitHub

1. Allez sur [github.com](https://github.com) et cr?ez un nouveau repository
2. Nommez-le par exemple `digicraft-agency-website`
3. Ne cochez AUCUNE option (pas de README, .gitignore, etc.)

### ?tape 3 : Pousser votre code sur GitHub

```bash
# Initialiser git (si pas d?j? fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - DigiCraft Agency website"

# Ajouter le remote GitHub (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Pousser le code
git branch -M main
git push -u origin main
```

### ?tape 4 : Connecter ? Vercel

1. **Allez sur [vercel.com](https://vercel.com)**
2. **Cliquez sur "Sign Up" ou "Login"**
3. **Connectez-vous avec votre compte GitHub**
4. **Cliquez sur "New Project"**
5. **S?lectionnez votre repository** `digicraft-agency-website`
6. **Vercel d?tecte automatiquement Next.js** ?

### ?tape 5 : Configuration du projet

Vercel configure automatiquement :
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Vous n'avez RIEN ? modifier !** ??

### ?tape 6 : D?ployer

1. Cliquez sur **"Deploy"**
2. Attendez 2-3 minutes (premi?re fois)
3. Votre site est en ligne ! ??

Vercel vous donne une URL comme :
- `https://digicraft-agency-website.vercel.app`

---

## ?? M?thode 2 : D?ploiement Direct (Sans GitHub)

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# D?ployer (depuis le dossier du projet)
vercel

# Suivre les instructions :
# - Set up and deploy? Yes
# - Which scope? (votre compte)
# - Link to existing project? No
# - What's your project's name? digicraft-agency
# - In which directory is your code located? ./
# - Want to override settings? No

# Pour d?ployer en production
vercel --prod
```

---

## ?? Configuration Avanc?e

### Variables d'environnement (optionnel)

Si vous ajoutez un backend ou des API keys :

1. Dans Vercel Dashboard ? Votre projet ? **Settings** ? **Environment Variables**
2. Ajoutez vos variables :
   - `NEXT_PUBLIC_API_URL`
   - `DATABASE_URL`
   - etc.

### Domaine personnalis?

1. Dans Vercel Dashboard ? Votre projet ? **Settings** ? **Domains**
2. Cliquez sur **"Add"**
3. Entrez votre domaine : `www.digicraft-agency.fr`
4. Suivez les instructions pour configurer les DNS

#### Configuration DNS
Ajoutez ces enregistrements chez votre registrar (OVH, Gandi, etc.) :

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## ?? D?ploiement Automatique

Une fois connect? ? GitHub, **chaque push d?clenche un d?ploiement automatique** :

```bash
# Faire des modifications
git add .
git commit -m "Mise ? jour du contenu"
git push

# Vercel d?tecte le push et red?ploie automatiquement ! ??
```

### Branches et Preview

- **main/master** ? D?ploiement en PRODUCTION
- **autres branches** ? D?ploiements de PREVIEW (URLs temporaires)

```bash
# Cr?er une branche de d?veloppement
git checkout -b dev

# Faire des modifs et pousser
git add .
git commit -m "Test nouvelle feature"
git push origin dev

# Vercel cr?e une URL de preview automatiquement !
```

---

## ?? R?solution de Probl?mes

### Erreur : "Module not found"

```bash
# Nettoyer et r?installer
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erreur de build Leaflet/Map

Le composant Map est d?j? configur? avec `dynamic import` et `ssr: false`.
Si probl?me, v?rifiez dans `components/Contact.tsx` :

```typescript
const Map = dynamic(() => import('./Map'), { ssr: false })
```

### Images ne s'affichent pas

V?rifiez `next.config.js` - les domaines Unsplash sont d?j? configur?s :

```javascript
images: {
  domains: ['images.unsplash.com', 'via.placeholder.com'],
}
```

### Erreur TypeScript

```bash
# V?rifier les erreurs localement
npm run build

# Si erreurs, corriger avant de d?ployer
```

---

## ?? Monitoring et Analytics

### Vercel Analytics (gratuit)

1. Dans Vercel Dashboard ? **Analytics**
2. Activez **Web Analytics**
3. Aucune configuration n?cessaire !

### Ajouter Google Analytics

Dans `app/layout.tsx`, ajoutez dans le `<head>` :

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## ?? Checklist Avant D?ploiement

- [ ] `npm run build` r?ussit localement
- [ ] Toutes les images chargent correctement
- [ ] Le site est responsive (tester mobile)
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact configur?
- [ ] M?tadonn?es SEO v?rifi?es (`app/layout.tsx`)
- [ ] Variables d'environnement ajout?es (si n?cessaire)
- [ ] Favicon ajout? (`public/favicon.ico`)

---

## ?? Liens Utiles

- **Dashboard Vercel** : https://vercel.com/dashboard
- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Vercel** : https://vercel.com/docs
- **Support Vercel** : https://vercel.com/support

---

## ?? Conseils Pro

1. **Branch Protection** : Utilisez des branches de dev pour tester avant production
2. **Preview Deployments** : Partagez les URLs de preview avec vos clients
3. **Rollback** : En cas de probl?me, revenez ? la version pr?c?dente en 1 clic
4. **Monitoring** : Activez les alertes pour ?tre notifi? des erreurs
5. **Performance** : Vercel optimise automatiquement les images et le cache

---

## ?? Besoin d'Aide ?

- **Vercel Discord** : https://vercel.com/discord
- **GitHub Issues** : Cr?ez une issue sur votre repo
- **Documentation** : Toujours votre meilleure amie !

---

**Votre site sera en ligne en moins de 5 minutes ! ??**

Bonne chance avec votre d?ploiement ! ??