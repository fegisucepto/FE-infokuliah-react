// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logoInfokuliah from '../images/InfoKuliah.png';
import '../css/style.css';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="navbar-container">
      <nav className="navbar-content">
        <Link to="/" className="navbar-brand">
          <img src={logoInfokuliah} alt="Infokuliah.id" className="logo" />
        </Link>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link">Kursus</Link>
            </li>
            <li className="nav-item">
              <Link to="/alumni" className="nav-link">Alumni</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
          {!token ? (
            <>
              <Link to="/register" className="btn register-btn">Register</Link>
              <Link to="/login" className="btn login-btn">Login</Link>
            </>
          ) : (
            <button className="btn logout-btn" onClick={logout}>Logout</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
