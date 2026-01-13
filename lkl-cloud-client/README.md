# LKL Cloud - Espace Client

Nouvel espace client indépendant pour LKL Cloud, développé avec React et Node.js.

## Technologies

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Style**: CSS3 avec design moderne dark mode

## Fonctionnalités

- Dashboard avec statistiques
- Gestion des services (VPS, Web Hosting, Game Servers)
- Facturation et historique des paiements
- Système de support/tickets
- Gestion du profil utilisateur

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

Le serveur démarre sur http://localhost:5000

### Frontend

```bash
cd client
npm install
npm run dev
```

Le client démarre sur http://localhost:5173

## Développement

1. Lance le backend : `cd server && npm run dev`
2. Lance le frontend : `cd client && npm run dev`
3. Ouvre http://localhost:5173 dans ton navigateur

## Architecture

```
lkl-cloud-client/
├── client/           # Frontend React
│   ├── src/
│   │   ├── components/   # Composants React
│   │   ├── App.jsx      # Composant principal
│   │   └── App.css      # Styles
│   └── package.json
│
├── server/           # Backend Node.js
│   ├── index.js     # Serveur Express + API
│   ├── .env         # Variables d'environnement
│   └── package.json
│
└── README.md
```

## API Endpoints

- `GET /api/dashboard` - Données du dashboard
- `GET /api/services` - Liste des services
- `GET /api/factures` - Liste des factures
- `GET /api/tickets` - Liste des tickets support
- `GET /api/profil` - Informations du profil

## Créé par

LKL Cloud Team avec Claude Sonnet 4.5
