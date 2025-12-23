# Portfolio - Next.js 15 App Router

Portfolio personnel moderne, minimaliste et multilingue (FR/EN) avec Next.js 15 et React 19.

## 🎯 Philosophie KISS

- ✅ Architecture simple et claire
- ✅ Données JSON dans `/server`
- ✅ SCSS organisé et modulaire
- ✅ i18n intégré (FR/EN)
- ✅ Aucune complexité inutile
- ❌ Pas d'API routes
- ❌ Pas de TypeScript
- ❌ Pas de cache externe

## ✨ Fonctionnalités

- ⚡️ **Next.js 15** avec App Router
- ⚛️ **React 19**
- 🌍 **i18n** - Multilingue FR/EN avec switch
- 🎨 **Materialize CSS** + **SCSS modulaire**
- 🎭 **AOS** - Animations au scroll
- 📊 **Google Analytics** & **GTM**
- 📱 **100% Responsive**
- 🚀 **Performance optimale**

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 🌍 Langue / Language

Le site supporte le **Français** et l'**Anglais**.
Un bouton FR/EN en haut à droite permet de changer de langue.

Les traductions sont dans `lib/i18n.js`.

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.js           # Layout racine
│   ├── page.js             # Page d'accueil (server)
│   └── HomePage.jsx        # Logique client
│
├── components/
│   ├── LanguageSwitcher/   # Bouton FR/EN
│   ├── about/              # Section À propos
│   ├── portfolio/          # Projets avec filtres
│   ├── services/           # Compétences
│   ├── technologies/       # Technologies (slider)
│   ├── timeline/           # Formation
│   ├── blog/               # Blog
│   ├── footer/             # Footer
│   └── hero/               # Hero section
│
├── lib/
│   ├── i18n.js            # Traductions FR/EN
│   ├── LanguageContext.jsx # Contexte langue
│   ├── analytics.js        # Google Analytics
│   └── tooltips.js         # Tooltips
│
├── server/                 # Données JSON
│   ├── author.json        # Infos personnelles
│   ├── project.json       # Projets
│   ├── service.json       # Compétences
│   ├── social.json        # Réseaux sociaux
│   ├── technologies.json  # Technologies
│   └── timeline.json      # Formation/Expérience
│
├── styles/
│   ├── globals.css        # Styles globaux + imports
│   ├── main.scss          # Point d'entrée SCSS
│   └── scss/              # Modules SCSS
│       ├── base.scss      # Styles de base
│       ├── header.scss    # Header/Menu
│       ├── portfolio.scss # Portfolio
│       ├── responsive.scss # Media queries
│       └── language-switcher.scss # Switch langue
│
└── public/img/            # Images statiques
```

## 🎨 Personnalisation

### 1. Informations personnelles
Éditez `server/author.json` :
```json
{
  "name": "Votre Nom",
  "job": "Développeur Full Stack",
  "email": "votre@email.com",
  "bio": "Votre biographie...",
  "profil": "/img/me.jpg",
  "address": "Ville, Pays",
  "birth": "1990-01-01"
}
```

### 2. Projets
Éditez `server/project.json`

### 3. Compétences
Éditez `server/service.json`

### 4. Technologies
Éditez `server/technologies.json`

### 5. Formation
Éditez `server/timeline.json`

### 6. Réseaux sociaux
Éditez `server/social.json`

## 🌍 Ajouter/Modifier les traductions

Éditez `lib/i18n.js` :

```javascript
export const translations = {
  fr: {
    menu: {
      home: "Accueil",
      skills: "Compétences",
      // ...
    }
  },
  en: {
    menu: {
      home: "Home",
      skills: "Skills",
      // ...
    }
  }
};
```

### Utiliser dans un composant

```jsx
import { useLanguage } from "../lib/LanguageContext";

function MyComponent() {
  const { t, language, switchLanguage } = useLanguage();
  
  return <h1>{t('menu.home')}</h1>;
}
```

## 🎨 Personnaliser le thème

### Changer la couleur principale

Éditez `styles/skins/yellow.scss` ou choisissez un autre thème dans `/skins` :

```scss
// Dans main.scss, ligne 6
@import "./skins/yellow.scss"; // Changez yellow par blue, red, etc.
```

Thèmes disponibles : `blue`, `red`, `green`, `purple`, `orange`, `magenta`, etc.

## 🔧 Configuration

### Google Analytics
Dans `lib/analytics.js` :
```javascript
export const ANALYTICS_ID = 'G-XXXXXXXXXX';
```

### Google Tag Manager
Dans `app/HomePage.jsx` :
```javascript
TagManager.initialize({
  gtmId: "GTM-XXXXXXX",
});
```

## 🛠️ Technologies

| Catégorie | Technologies |
|-----------|-------------|
| Framework | Next.js 15, React 19 |
| Styling | Materialize CSS, Sass/SCSS |
| i18n | Custom Context API |
| Animations | AOS (Animate On Scroll) |
| UI | React Slick, React Tabs, React Modal |
| Analytics | Google Analytics, GTM |
| Images | Next/Image (optimisées) |

## 📦 Scripts

```bash
npm run dev    # Développement
npm run build  # Build production
npm start      # Serveur production
npm run lint   # Linter
```

## 🐛 Dépannage

### Nettoyer le cache
```bash
Remove-Item -Recurse -Force .next
npm run dev
```

### Réinstaller les dépendances
```bash
Remove-Item -Recurse -Force node_modules
npm install
```

### Problème de langue
La langue est stockée dans `localStorage`. Vider le cache du navigateur si nécessaire.

## 🚢 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

Ou connectez votre repo GitHub sur [vercel.com](https://vercel.com)

### Variables d'environnement
Créez un fichier `.env.local` si nécessaire :
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## ✅ Fonctionnalités incluses

- ✅ Navigation avec menu latéral fixe
- ✅ Smooth scroll entre sections
- ✅ Switch langue FR/EN en haut à droite
- ✅ Animations au scroll (AOS)
- ✅ Calcul automatique de l'âge
- ✅ Portfolio avec filtres par catégorie
- ✅ Slider de technologies
- ✅ Timeline formation/expérience
- ✅ Liens réseaux sociaux
- ✅ Preloader (3 secondes)
- ✅ Responsive design
- ✅ SEO optimisé
- ✅ Images optimisées

## 📖 Architecture technique

### App Router Next.js 15
- `layout.js` : Layout racine (Server Component)
- `page.js` : Page d'accueil (Server Component)
- `HomePage.jsx` : Logique client avec hooks

### Gestion de l'état
- React Context API pour i18n
- useState/useEffect pour l'état local
- Pas de Redux (KISS)

### Styles
- SCSS modulaire et organisé
- Imports centralisés dans `main.scss`
- Pas de CSS-in-JS
- Thèmes dans `/skins`

### Données
- Fichiers JSON dans `/server`
- Import direct (pas de fetch)
- Pas d'API routes
- Performances optimales

## 🎓 Comment ça marche

1. **Server Components** : `layout.js` et `page.js` rendus côté serveur
2. **Client Components** : Composants avec `"use client"` pour interactivité
3. **i18n** : Context Provider wrappé autour de l'app
4. **Données** : Import direct des JSON (bundlés avec l'app)
5. **Styles** : SCSS compilé par Next.js automatiquement

## 📄 Licence

Libre d'utilisation pour votre portfolio personnel.

## 👤 Auteur

Ryuzvki

---

**Simple. Rapide. Multilingue. Efficace.** ✨

## ✨ Fonctionnalités

- ⚡️ **Next.js 15** avec App Router
- ⚛️ **React 19**
- 🎨 **Materialize CSS** pour le design
- 🎭 **AOS** (Animate On Scroll) animations
- 📊 **Google Analytics** & **GTM** intégrés
- 📱 **Responsive** sur tous les appareils
- 🚀 **Performance optimale** avec Server Components

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📁 Structure simplifiée

```
portfolio/
├── app/                      # Next.js 15 App Router
│   ├── layout.js            # Layout racine
│   ├── page.js              # Page d'accueil
│   └── ClientHomePage.jsx   # Logique client
│
├── components/              # Composants React
│   ├── about/
│   ├── blog/
│   ├── footer/
│   ├── hero/
│   ├── portfolio/
│   ├── services/
│   ├── technologies/
│   └── timeline/
│
├── server/                  # Données JSON
│   ├── author.json         # Infos personnelles
│   ├── project.json        # Projets portfolio
│   ├── service.json        # Compétences
│   ├── social.json         # Réseaux sociaux
│   ├── technologies.json   # Technologies
│   └── timeline.json       # Éducation/Expérience
│
├── public/img/             # Images statiques
└── styles/                 # CSS/SCSS
```

## 🎨 Personnalisation

### 1. Informations personnelles
Éditez `server/author.json` :
```json
{
  "name": "Votre Nom",
  "job": "Développeur Full Stack",
  "email": "votre@email.com",
  "website": "https://votre-site.com",
  "bio": "Votre biographie...",
  "profil": "/img/me.jpg",
  "address": "Votre ville, Pays",
  "birth": "1990-01-01"
}
```

### 2. Compétences
Éditez `server/service.json`

### 3. Projets
Éditez `server/project.json`

### 4. Technologies
Éditez `server/technologies.json`

### 5. Timeline
Éditez `server/timeline.json`

### 6. Réseaux sociaux
Éditez `server/social.json`

## 🔧 Configuration Analytics

### Google Analytics
Dans `lib/analytics.js` :
```javascript
export const ANALYTICS_ID = 'G-XXXXXXXXXX';
```

### Google Tag Manager
Dans `app/ClientHomePage.jsx` :
```javascript
TagManager.initialize({
  gtmId: "GTM-XXXXXXX",
});
```

## 🛠️ Technologies

| Catégorie | Technologies |
|-----------|-------------|
| Framework | Next.js 15, React 19 |
| Styling | Materialize CSS, Sass |
| Animations | AOS (Animate On Scroll) |
| UI Components | React Slick, React Tabs, React Modal |
| Analytics | Google Analytics, GTM |
| Images | Next/Image (optimisées) |

## 📦 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Lint
npm run lint
```

## 🐛 Dépannage

### Problème de démarrage
```bash
Remove-Item -Recurse -Force .next, node_modules
npm install
npm run dev
```

### Images ne chargent pas
Vérifiez que les images sont dans `/public/img`

### Données ne s'affichent pas
Vérifiez la structure JSON dans `/server`

## 🚢 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

Ou connectez votre repo GitHub sur [vercel.com](https://vercel.com)

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`

## 📝 Comment ça marche ?

1. **App Router** : Utilise la nouvelle architecture Next.js 15
2. **Server Components** : `layout.js` et `page.js` sont des Server Components
3. **Client Components** : Composants avec `"use client"` pour interactivité
4. **Données JSON** : Import direct depuis `/server` (pas d'API routes)
5. **Optimisation** : Next.js optimise automatiquement le bundle

## ✅ Fonctionnalités incluses

- ✅ Navigation avec menu latéral fixe
- ✅ Smooth scroll entre sections
- ✅ Animations au scroll (AOS)
- ✅ Section À propos avec calcul d'âge
- ✅ Portfolio avec filtres par catégorie
- ✅ Slider de technologies
- ✅ Timeline éducation/expérience
- ✅ Liens sociaux
- ✅ Preloader/Loading screen (3s)
- ✅ Responsive design
- ✅ SEO optimisé (metadata)
- ✅ Images optimisées (Next/Image)

## 🎓 Structure des composants

Tous les composants utilisent les données JSON :
- `About.jsx` → `author.json`
- `Service.jsx` → `service.json`
- `Portfolio.jsx` → `project.json`
- `Technology.jsx` → `technologies.json`
- `Education.jsx` → `timeline.json`
- `Social.jsx` → `social.json`

**Pas d'API, pas de fetch() distant** : tout est importé directement !

## 📖 Documentation

Consultez [START.md](./START.md) pour le guide complet de démarrage et personnalisation.

## 📄 Licence

Libre d'utilisation pour votre portfolio personnel.

## 👤 Auteur

Ryuzvki

---

**Simple, rapide, efficace. Exactement ce qu'il faut pour un portfolio.** ✨

## ✨ Caractéristiques

- ⚡️ **Next.js 15** avec App Router
- ⚛️ **React 19** 
- 🎨 **Materialize CSS** pour le design
- 🎭 **AOS** (Animate On Scroll) pour les animations
- 📊 **Google Analytics** & **GTM** intégrés
- 🗄️ **Redis** pour la mise en cache (optionnel)
- 📱 **Responsive** sur tous les appareils

## 🛠️ Technologies

- Next.js 15.1.2
- React 19.0.0
- TypeScript 5.7.2
- Sass/SCSS
- Materialize CSS
- AOS Animations
- React Slick (Carousel)
- React Tabs
- Redis (IORedis)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour la production
npm run build
npm start
```

## 🌐 Démarrage

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
/app                      # App Router (Next.js 15)
  ├── layout.tsx          # Layout racine
  ├── page.tsx            # Page d'accueil
  ├── ClientHomePage.tsx  # Composant client
  └── api/v1/             # API Routes
      ├── author/
      ├── projects/
      ├── services/
      ├── social/
      ├── tech/
      └── timeline/

/components               # Composants React
  ├── about/
  ├── blog/
  ├── footer/
  ├── hero/
  ├── portfolio/
  ├── services/
  ├── technologies/
  └── timeline/

/server                   # Données JSON
  ├── author.json
  ├── project.json
  ├── service.json
  ├── social.json
  ├── technologies.json
  └── timeline.json

/public                   # Assets statiques
  └── img/

/styles                   # Styles globaux
  ├── globals.css
  └── main.scss
```

## 🔧 Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env.local` pour Redis en production :

```env
REDIS_URL=your_redis_connection_url
NODE_ENV=production
```

### Google Analytics

Modifiez `lib/analytics.js` pour configurer votre ID Analytics :

```javascript
export const ANALYTICS_ID = 'G-XXXXXXXXXX';
```

### Google Tag Manager

Modifiez `app/ClientHomePage.tsx` pour configurer votre GTM ID :

```typescript
TagManager.initialize({
  gtmId: "GTM-XXXXXXX",
});
```

## 📝 Personnalisation

### Modifier les données

Éditez les fichiers JSON dans `/server` :
- `author.json` - Informations personnelles
- `service.json` - Services/Compétences
- `project.json` - Portfolio/Projets
- `technologies.json` - Technologies maîtrisées
- `timeline.json` - Éducation/Expérience
- `social.json` - Liens sociaux

### Modifier le design

Les styles sont dans `/styles` :
- `globals.css` - Styles globaux
- `main.scss` - Styles principaux SCSS
- `/skins` - Thèmes de couleurs

## 🐛 Dépannage

### Erreurs TypeScript
```bash
# Supprimer le cache et réinstaller
Remove-Item -Recurse -Force node_modules, .next
npm install
```

### Le serveur ne démarre pas
```bash
# Vérifier la version de Node.js (>=18 requis)
node --version

# Nettoyer et reconstruire
npm run build
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation App Router](https://nextjs.org/docs/app)
- [Materialize CSS](https://materializecss.com/)
- [AOS Library](https://michalsnik.github.io/aos/)

## 🚢 Déploiement

Le moyen le plus simple de déployer est d'utiliser [Vercel](https://vercel.com) :

```bash
# Avec Vercel CLI
npm i -g vercel
vercel
```

Ou connectez directement votre repo GitHub à Vercel.

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 👤 Auteur

Ryuzvki

---

**Note**: Pour plus de détails sur la migration de Pages Router vers App Router, consultez [MIGRATION.md](./MIGRATION.md)
