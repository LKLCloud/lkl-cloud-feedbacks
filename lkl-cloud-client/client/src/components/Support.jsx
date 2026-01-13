import { useState, useEffect } from 'react';

function Support() {
  const [tickets, setTickets] = useState([]);
  const [showNewTicket, setShowNewTicket] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/tickets')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="support-page">
      <div className="page-header">
        <h3>Support / Tickets</h3>
        <button
          className="btn-primary"
          onClick={() => setShowNewTicket(!showNewTicket)}
        >
          + Nouveau Ticket
        </button>
      </div>

      {showNewTicket && (
        <div className="new-ticket-form">
          <h4>Créer un nouveau ticket</h4>
          <form>
            <div className="form-group">
              <label>Sujet</label>
              <input type="text" placeholder="Ex: Problème de connexion" />
            </div>
            <div className="form-group">
              <label>Priorité</label>
              <select>
                <option>Basse</option>
                <option>Moyenne</option>
                <option>Haute</option>
                <option>Critique</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Décrivez votre problème..."></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary">Envoyer</button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowNewTicket(false)}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="tickets-list">
        {tickets.map(ticket => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-header">
              <h4>{ticket.sujet}</h4>
              <div className="ticket-badges">
                <span className={`badge ${ticket.statut.toLowerCase().replace(' ', '-')}`}>
                  {ticket.statut}
                </span>
                <span className={`badge priority-${ticket.priorite.toLowerCase()}`}>
                  {ticket.priorite}
                </span>
              </div>
            </div>
            <p className="ticket-date">Créé le: {ticket.date}</p>
            <p className="ticket-message">{ticket.dernierMessage}</p>
            <button className="btn-secondary">💬 Voir la conversation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
