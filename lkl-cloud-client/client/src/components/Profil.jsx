import { useState, useEffect } from 'react';

function Profil() {
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profil')
      .then(res => res.json())
      .then(data => setProfil(data))
      .catch(err => console.error(err));
  }, []);

  if (!profil) return <div className="loading">Chargement...</div>;

  return (
    <div className="profil-page">
      <div className="page-header">
        <h3>Mon Profil</h3>
        <button className="btn-primary">✏️ Modifier</button>
      </div>

      <div className="profil-grid">
        <div className="profil-card">
          <h4>Informations Personnelles</h4>
          <div className="profil-info">
            <div className="info-row">
              <span className="label">Nom:</span>
              <span className="value">{profil.nom}</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">{profil.email}</span>
            </div>
            <div className="info-row">
              <span className="label">Téléphone:</span>
              <span className="value">{profil.telephone}</span>
            </div>
            <div className="info-row">
              <span className="label">Adresse:</span>
              <span className="value">{profil.adresse}</span>
            </div>
          </div>
        </div>

        <div className="profil-card">
          <h4>Statistiques du Compte</h4>
          <div className="profil-stats">
            <div className="stat-item">
              <div className="stat-value">{profil.dateInscription}</div>
              <div className="stat-label">Membre depuis</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{profil.services}</div>
              <div className="stat-label">Services Actifs</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{profil.facturesPayees}</div>
              <div className="stat-label">Factures Payées</div>
            </div>
          </div>
        </div>

        <div className="profil-card">
          <h4>Sécurité</h4>
          <div className="security-actions">
            <button className="btn-secondary">🔒 Changer le mot de passe</button>
            <button className="btn-secondary">🔐 Activer 2FA</button>
            <button className="btn-secondary">📱 Gérer les sessions</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
