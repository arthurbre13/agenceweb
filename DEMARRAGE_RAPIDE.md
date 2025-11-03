# ? D?marrage Rapide - DigiCraft Agency

## ?? En 3 Minutes sur Vercel

### Option A : Via l'Interface Vercel (Le plus simple)

1. **Cr?er un compte gratuit sur [vercel.com](https://vercel.com)** avec GitHub

2. **Pousser votre code sur GitHub** :
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git push -u origin main
```

3. **Sur Vercel** :
   - Cliquez sur **"New Project"**
   - S?lectionnez votre repository
   - Cliquez sur **"Deploy"**
   - ? **C'est en ligne !**

Votre site : `https://votre-projet.vercel.app`

---

### Option B : Via la Ligne de Commande (Encore plus rapide)

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. D?ployer
vercel

# 4. D?ployer en production
vercel --prod
```

? **Termin? en 1 minute !**

---

## ?? Commandes Utiles

```bash
# D?veloppement local
npm install          # Installer les d?pendances
npm run dev         # Lancer en local (http://localhost:3000)
npm run build       # Tester le build
npm start           # Lancer la version production en local

# D?ploiement
npm run preview     # D?ployer une preview
npm run deploy      # D?ployer en production
```

---

## ?? Personnalisation Rapide

### Changer le nom de l'agence
?ditez ces fichiers :
- `app/layout.tsx` (titre + meta)
- `components/Header.tsx` (logo)
- `components/Footer.tsx` (nom)

### Changer les couleurs
?ditez `tailwind.config.js` :
```javascript
colors: {
  primary: { /* vos couleurs */ },
  secondary: { /* vos couleurs */ },
}
```

### Remplacer les images
Changez les URLs dans :
- `components/Portfolio.tsx`
- `components/About.tsx`
- `components/Testimonials.tsx`
- `components/Blog.tsx`

---

## ? Checklist de D?ploiement

- [ ] `npm run build` fonctionne sans erreur
- [ ] Test? sur mobile (responsive)
- [ ] Images et liens v?rifi?s
- [ ] Formulaire de contact OK
- [ ] Code pouss? sur GitHub
- [ ] D?ploy? sur Vercel

---

## ?? Probl?mes Fr?quents

**Build ?choue ?**
```bash
rm -rf node_modules .next
npm install
npm run build
```

**Map ne s'affiche pas ?**
? C'est normal, elle charge avec un l?ger d?lai

**Images ne chargent pas ?**
? V?rifiez que les domaines sont dans `next.config.js`

---

## ?? Documentation Compl?te

- `README.md` - Documentation g?n?rale
- `DEPLOIEMENT.md` - Guide d?taill? de d?ploiement
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)

---

**Besoin d'aide ? Consultez DEPLOIEMENT.md pour le guide complet !** ??