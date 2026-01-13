import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Facturation from './components/Facturation';
import Support from './components/Support';
import Profil from './components/Profil';
import Particles from './components/Particles';
import Login from './components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'services': return <Services />;
      case 'facturation': return <Facturation />;
      case 'support': return <Support />;
      case 'profil': return <Profil />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Particles />
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <h1>LKL Cloud</h1>
            <p>Client Portal</p>
          </div>
        </div>

        <nav className="nav">
          <button
            className={currentPage === 'dashboard' ? 'active' : ''}
            onClick={() => setCurrentPage('dashboard')}
          >
            Vue d'ensemble
          </button>
          <button
            className={currentPage === 'services' ? 'active' : ''}
            onClick={() => setCurrentPage('services')}
          >
            Mes Services
          </button>
          <button
            className={currentPage === 'facturation' ? 'active' : ''}
            onClick={() => setCurrentPage('facturation')}
          >
            Facturation
          </button>
          <button
            className={currentPage === 'support' ? 'active' : ''}
            onClick={() => setCurrentPage('support')}
          >
            Support
          </button>
          <button
            className={currentPage === 'profil' ? 'active' : ''}
            onClick={() => setCurrentPage('profil')}
          >
            Profil
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>Déconnexion</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2>{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
          <div className="user-info">
            <span>Bienvenue, <strong>LKL Cloud</strong></span>
          </div>
        </header>

        <div className="content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
