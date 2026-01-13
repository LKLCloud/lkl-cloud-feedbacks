import { useState, useEffect } from 'react';

function Facturation() {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/factures')
      .then(res => res.json())
      .then(data => setFactures(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="facturation-page">
      <div className="page-header">
        <h3>Mes Factures</h3>
      </div>

      <div className="factures-table">
        <table>
          <thead>
            <tr>
              <th>Numéro</th>
              <th>Date</th>
              <th>Service</th>
              <th>Montant</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {factures.map(facture => (
              <tr key={facture.id}>
                <td><strong>{facture.numero}</strong></td>
                <td>{facture.date}</td>
                <td>{facture.service}</td>
                <td><strong>{facture.montant}</strong></td>
                <td>
                  <span className={`badge ${facture.statut.toLowerCase()}`}>
                    {facture.statut}
                  </span>
                </td>
                <td>
                  <button className="btn-small">📄 Télécharger</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Facturation;
