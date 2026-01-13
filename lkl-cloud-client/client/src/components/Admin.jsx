import { useState, useEffect } from 'react';

function Admin() {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalServices: 0,
    totalRevenue: 0,
    activeTickets: 0
  });

  useEffect(() => {
    // Charger les données admin
    fetchAdminData();
  }, []);

  const fetchAdminData = () => {
    // Simulation de données admin
    setStats({
      totalUsers: 156,
      totalServices: 423,
      totalRevenue: '45,890€',
      activeTickets: 12
    });

    setUsers([
      { id: 1, nom: 'Jean Dupont', email: 'jean@example.com', services: 3, statut: 'Actif', inscription: '15/01/2025' },
      { id: 2, nom: 'Marie Martin', email: 'marie@example.com', services: 5, statut: 'Actif', inscription: '10/01/2025' },
      { id: 3, nom: 'Pierre Bernard', email: 'pierre@example.com', services: 2, statut: 'Inactif', inscription: '08/01/2025' }
    ]);

    setServices([
      { id: 1, client: 'Jean Dupont', type: 'VPS', nom: 'VPS-PROD-01', statut: 'Actif', prix: '29.99€' },
      { id: 2, client: 'Marie Martin', type: 'Hébergement Web', nom: 'WEB-SITE-01', statut: 'Actif', prix: '9.99€' },
      { id: 3, client: 'Pierre Bernard', type: 'Serveur Minecraft', nom: 'MC-SERVER-01', statut: 'Suspendu', prix: '19.99€' }
    ]);

    setTickets([
      { id: 1, client: 'Jean Dupont', sujet: 'Problème de connexion', priorite: 'Haute', statut: 'Ouvert', date: '13/01/2025' },
      { id: 2, client: 'Marie Martin', sujet: 'Question facturation', priorite: 'Moyenne', statut: 'En cours', date: '12/01/2025' }
    ]);
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Panel Administrateur</h2>
        <p className="admin-subtitle">Gestion complète de la plateforme LKL Cloud</p>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon users">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.totalUsers}</h3>
            <p>Utilisateurs</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon services">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M20 7H4C2.89543 7 2 7.89543 2 9V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.totalServices}</h3>
            <p>Services Actifs</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon revenue">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.totalRevenue}</h3>
            <p>Revenu Total</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon tickets">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="admin-stat-info">
            <h3>{stats.activeTickets}</h3>
            <p>Tickets Actifs</p>
          </div>
        </div>
      </div>

      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Utilisateurs
        </button>
        <button
          className={`admin-tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Services
        </button>
        <button
          className={`admin-tab ${activeTab === 'tickets' ? 'active' : ''}`}
          onClick={() => setActiveTab('tickets')}
        >
          Tickets
        </button>
        <button
          className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Paramètres
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'users' && (
          <div className="admin-table-container">
            <div className="table-header">
              <h3>Gestion des Utilisateurs</h3>
              <button className="btn-primary">+ Ajouter un utilisateur</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Services</th>
                  <th>Statut</th>
                  <th>Inscription</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>#{user.id}</td>
                    <td>{user.nom}</td>
                    <td>{user.email}</td>
                    <td>{user.services}</td>
                    <td>
                      <span className={`badge ${user.statut.toLowerCase()}`}>
                        {user.statut}
                      </span>
                    </td>
                    <td>{user.inscription}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-icon">Modifier</button>
                        <button className="btn-icon danger">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="admin-table-container">
            <div className="table-header">
              <h3>Gestion des Services</h3>
              <button className="btn-primary">+ Créer un service</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Type</th>
                  <th>Nom du Service</th>
                  <th>Statut</th>
                  <th>Prix</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map(service => (
                  <tr key={service.id}>
                    <td>#{service.id}</td>
                    <td>{service.client}</td>
                    <td>{service.type}</td>
                    <td>{service.nom}</td>
                    <td>
                      <span className={`badge ${service.statut.toLowerCase()}`}>
                        {service.statut}
                      </span>
                    </td>
                    <td className="price">{service.prix}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-icon">Gérer</button>
                        <button className="btn-icon danger">Suspendre</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="admin-table-container">
            <div className="table-header">
              <h3>Gestion des Tickets</h3>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Client</th>
                  <th>Sujet</th>
                  <th>Priorité</th>
                  <th>Statut</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map(ticket => (
                  <tr key={ticket.id}>
                    <td>#{ticket.id}</td>
                    <td>{ticket.client}</td>
                    <td>{ticket.sujet}</td>
                    <td>
                      <span className={`badge priority-${ticket.priorite.toLowerCase()}`}>
                        {ticket.priorite}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${ticket.statut.toLowerCase().replace(' ', '-')}`}>
                        {ticket.statut}
                      </span>
                    </td>
                    <td>{ticket.date}</td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-icon">Répondre</button>
                        <button className="btn-icon">Fermer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="admin-settings">
            <h3>Paramètres de la Plateforme</h3>
            <div className="settings-grid">
              <div className="setting-card">
                <h4>Paramètres Généraux</h4>
                <div className="form-group">
                  <label>Nom de la plateforme</label>
                  <input type="text" defaultValue="LKL Cloud" />
                </div>
                <div className="form-group">
                  <label>Email de contact</label>
                  <input type="email" defaultValue="contact@lklcloud.com" />
                </div>
                <button className="btn-primary">Sauvegarder</button>
              </div>

              <div className="setting-card">
                <h4>Notifications</h4>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>Notifications par email</span>
                  </label>
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>Notifications Discord</span>
                  </label>
                </div>
                <button className="btn-primary">Sauvegarder</button>
              </div>

              <div className="setting-card">
                <h4>Maintenance</h4>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Mode maintenance</span>
                  </label>
                </div>
                <div className="form-group">
                  <label>Message de maintenance</label>
                  <textarea rows="3" placeholder="Le site est en maintenance..."></textarea>
                </div>
                <button className="btn-primary">Sauvegarder</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
