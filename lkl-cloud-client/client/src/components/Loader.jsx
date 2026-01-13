import './Loader.css';

function Loader() {
  return (
    <div className="modern-loader">
      <div className="loader-content">
        <div className="loader-rings">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
        <div className="loader-text">
          <h3>LKL Cloud</h3>
          <p>Chargement en cours...</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
