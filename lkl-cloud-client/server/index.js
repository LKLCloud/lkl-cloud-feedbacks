import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes de base
app.get('/', (req, res) => {
  res.json({
    message: 'LKL Cloud API est en ligne !',
    version: '1.0.0',
    endpoints: {
      dashboard: '/api/dashboard',
      services: '/api/services',
      factures: '/api/factures',
      tickets: '/api/tickets',
      profil: '/api/profil'
    }
  });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API LKL Cloud' });
});

// Route Dashboard
app.get('/api/dashboard', (req, res) => {
  res.json({
    stats: {
      services: 3,
      factures: 5,
      tickets: 2,
      depenses: '45.99€'
    },
    services: [
      { id: 1, nom: 'VPS France #1', type: 'VPS', statut: 'Actif', expiration: '2026-02-15' },
      { id: 2, nom: 'Hébergement Web Pro', type: 'Web Hosting', statut: 'Actif', expiration: '2026-01-30' },
      { id: 3, nom: 'Minecraft Server', type: 'Game Server', statut: 'Actif', expiration: '2026-03-10' }
    ]
  });
});

// Route Services
app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      nom: 'VPS France #1',
      type: 'VPS',
      statut: 'Actif',
      ip: '185.123.45.67',
      ram: '8 GB',
      cpu: '4 vCores',
      stockage: '160 GB NVMe',
      prix: '15.99€/mois',
      expiration: '2026-02-15'
    },
    {
      id: 2,
      nom: 'Hébergement Web Pro',
      type: 'Web Hosting',
      statut: 'Actif',
      domaine: 'monsite.fr',
      stockage: '50 GB SSD',
      bandwidth: 'Illimité',
      prix: '9.99€/mois',
      expiration: '2026-01-30'
    },
    {
      id: 3,
      nom: 'Minecraft Server',
      type: 'Game Server',
      statut: 'Actif',
      ip: '185.123.45.68:25565',
      slots: '100 joueurs',
      ram: '6 GB',
      prix: '19.99€/mois',
      expiration: '2026-03-10'
    }
  ]);
});

// Route Facturation
app.get('/api/factures', (req, res) => {
  res.json([
    { id: 1, numero: 'INV-2026-001', date: '2026-01-01', montant: '45.99€', statut: 'Payée', service: 'VPS + Web + Game' },
    { id: 2, numero: 'INV-2025-012', date: '2025-12-01', montant: '45.99€', statut: 'Payée', service: 'VPS + Web + Game' },
    { id: 3, numero: 'INV-2025-011', date: '2025-11-01', montant: '45.99€', statut: 'Payée', service: 'VPS + Web + Game' },
    { id: 4, numero: 'INV-2025-010', date: '2025-10-01', montant: '45.99€', statut: 'Payée', service: 'VPS + Web + Game' },
    { id: 5, numero: 'INV-2025-009', date: '2025-09-01', montant: '45.99€', statut: 'Payée', service: 'VPS + Web + Game' }
  ]);
});

// Route Support/Tickets
app.get('/api/tickets', (req, res) => {
  res.json([
    {
      id: 1,
      sujet: 'Problème de connexion VPS',
      statut: 'Ouvert',
      priorite: 'Haute',
      date: '2026-01-12',
      dernierMessage: 'En attente de réponse technique'
    },
    {
      id: 2,
      sujet: 'Demande d\'upgrade RAM',
      statut: 'En cours',
      priorite: 'Moyenne',
      date: '2026-01-10',
      dernierMessage: 'Traité par l\'équipe'
    }
  ]);
});

// Route Profil
app.get('/api/profil', (req, res) => {
  res.json({
    nom: 'LKL Cloud',
    email: 'contact@lklcloud.fr',
    telephone: '+33 1 23 45 67 89',
    adresse: '123 Rue de Paris, 75001 Paris, France',
    dateInscription: '2024-01-15',
    services: 3,
    facturesPayees: 12
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur LKL Cloud démarré sur http://localhost:${PORT}`);
});
