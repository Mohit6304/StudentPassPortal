// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand">StudentPassPro</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/apply" className="nav-link">Apply</Link>
            </li>
            <li className="nav-item">
              <Link to="/renew" className="nav-link">Renew</Link>
            </li>
            <li className="nav-item">
              <Link to="/modify" className="nav-link">Modify</Link>
            </li>
            <li className="nav-item">
              <Link to="/exclusive-pass" className="nav-link">Exclusive Pass</Link>
            </li>
            <li className="nav-item">
              <Link to="/general-pass" className="nav-link">General Pass</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
