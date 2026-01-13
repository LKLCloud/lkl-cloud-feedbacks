import { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="services-page">
      <div className="page-header">
        <h3>Mes Services</h3>
        <button className="btn-primary">+ Nouveau Service</button>
      </div>

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
              <button className="btn-secondary">⚙️ Gérer</button>
              <button className="btn-secondary">🔄 Renouveler</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
