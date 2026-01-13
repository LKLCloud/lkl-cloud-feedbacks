import { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showServerControl, setShowServerControl] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  const handleManageService = (service) => {
    setSelectedService(service);
    setShowServerControl(true);
  };

  const handleServerAction = (action) => {
    console.log(`Action ${action} sur le serveur ${selectedService.nom}`);
    // Ici on ajoutera l'appel API pour gérer le serveur
    alert(`Action "${action}" effectuée sur ${selectedService.nom}`);
  };

  return (
    <div className="services-page">
      <div className="page-header">
        <h3>Mes Services</h3>
        <button className="btn-primary">+ Nouveau Service</button>
      </div>

      {showServerControl && selectedService && (
        <div className="server-control-panel">
          <div className="control-header">
            <h4>Gestion de {selectedService.nom}</h4>
            <button
              className="btn-close"
              onClick={() => setShowServerControl(false)}
            >
              ×
            </button>
          </div>

          <div className="server-stats">
            <div className="stat-item">
              <span className="stat-label">Statut</span>
              <span className={`stat-value ${selectedService.statut.toLowerCase()}`}>
                {selectedService.statut}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Type</span>
              <span className="stat-value">{selectedService.type}</span>
            </div>
            {selectedService.ip && (
              <div className="stat-item">
                <span className="stat-label">IP</span>
                <span className="stat-value">{selectedService.ip}</span>
              </div>
            )}
          </div>

          <div className="server-actions-grid">
            <button
              className="action-btn start"
              onClick={() => handleServerAction('Démarrer')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Démarrer
            </button>

            <button
              className="action-btn stop"
              onClick={() => handleServerAction('Arrêter')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Arrêter
            </button>

            <button
              className="action-btn restart"
              onClick={() => handleServerAction('Redémarrer')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M21.5 2V8H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 22V16H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.13 5.09C18.1942 4.15403 17.0713 3.43175 15.8373 2.96955C14.6032 2.50735 13.2846 2.31538 11.9706 2.40629C10.6565 2.4972 9.37733 2.86905 8.21941 3.49849C7.06149 4.12793 6.05111 5.00093 5.26003 6.06" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.87 18.91C5.80582 19.846 6.92866 20.5683 8.16273 21.0305C9.3968 21.4927 10.7154 21.6846 12.0294 21.5937C13.3435 21.5028 14.6227 21.131 15.7806 20.5015C16.9385 19.8721 17.9489 18.9991 18.74 17.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Redémarrer
            </button>

            <button
              className="action-btn console"
              onClick={() => handleServerAction('Ouvrir console')}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M4 17L10 11L4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Console
            </button>
          </div>
        </div>
      )}

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card-header">
              <h4>{service.nom}</h4>
              <span className={`badge ${service.statut.toLowerCase()}`}>
                {service.statut}
              </span>
            </div>

            <div className="service-details">
              <div className="detail-row">
                <span className="label">Type:</span>
                <span className="value">{service.type}</span>
              </div>

              {service.ip && (
                <div className="detail-row">
                  <span className="label">IP:</span>
                  <span className="value">{service.ip}</span>
                </div>
              )}

              {service.domaine && (
                <div className="detail-row">
                  <span className="label">Domaine:</span>
                  <span className="value">{service.domaine}</span>
                </div>
              )}

              {service.ram && (
                <div className="detail-row">
                  <span className="label">RAM:</span>
                  <span className="value">{service.ram}</span>
                </div>
              )}

              {service.cpu && (
                <div className="detail-row">
                  <span className="label">CPU:</span>
                  <span className="value">{service.cpu}</span>
                </div>
              )}

              {service.stockage && (
                <div className="detail-row">
                  <span className="label">Stockage:</span>
                  <span className="value">{service.stockage}</span>
                </div>
              )}

              {service.slots && (
                <div className="detail-row">
                  <span className="label">Slots:</span>
                  <span className="value">{service.slots}</span>
                </div>
              )}

              <div className="detail-row">
                <span className="label">Prix:</span>
                <span className="value price">{service.prix}</span>
              </div>

              <div className="detail-row">
                <span className="label">Expiration:</span>
                <span className="value">{service.expiration}</span>
              </div>
            </div>

            <div className="service-actions">
              <button
                className="btn-secondary"
                onClick={() => handleManageService(service)}
              >
                Gérer
              </button>
              <button className="btn-secondary">Renouveler</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
