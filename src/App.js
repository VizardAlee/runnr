import React from "react";
import './App.css';
function App() {
  return (
    <div className="custom-container bg-secondary">
      <nav className="navbar navbar-expand-lg nav-color">
        <div class="container-fluid">
          <a className="runnr-brand no-deco text-color" href="/">.RUNNR</a> {/* runnnr-brand is something I might have to look into */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-color active" aria-current="page" href="home">Home</a>
              <a className="nav-link text-color" href="marketplace">Marketplace</a>
              <a className="nav-link text-color" href="financials">Financials</a>
              <a className="nav-link text-color" href="bookmarks">Bookmarks</a>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="row main-section">
        <div className="col-3 side-area">hello</div>
        <div className="col-6 main-main">hi</div>
      </div>
    </div>
  );
}

export default App;
