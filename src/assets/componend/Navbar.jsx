// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logoInfokuliah from '../images/InfoKuliah.png';
import '../css/style.css';

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <a className="navbar-brand" href="/">
          <img src={logoInfokuliah} alt="Infokuliah.id" className="logo" />
        </a>
        <button type="button" className="navbar-toggler" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Paket Kursus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumni">
                Alumni
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
          {isLoggedIn ? (
            <button className="btn logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn register-btn" to="/register" role="button">
                Register
              </Link>
              <Link className="btn login-btn" to="/login" role="button">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
