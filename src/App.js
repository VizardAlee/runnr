import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// importing pages here
import HomePage from "./pages/HomePage"
import MarketplacePage from "./pages/MarketplacePage"
import FinancialsPage from "./pages/FinancialsPage"
import BookmarksPage from "./pages/BookmarksPage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <div className="custom-container bg-secondary">
      <Router>
        <nav className="navbar navbar-expand-lg nav-color">
          <div class="container-fluid">
            <a className="runnr-brand no-deco text-color" href="/">.RUNNR</a> {/* runnnr-brand is something I might have to look into */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link text-color" href="/marketplace">Marketplace</a>
                <a className="nav-link text-color" href="/financials">Financials</a>
                <a className="nav-link text-color" href="/bookmarks">Bookmarks</a>
                <a className="nav-link text-color" href="/profile">Profile</a>
              </div>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="main-section">
          <div className="side-area">hello</div>
          <div className="main-main">
            <Routes>
              {/* defining routes for the page */}
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/financials" element={<FinancialsPage />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              {/* The default route */}
              <Route path="/" element={<HomePage />} />
            </Routes>       
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
