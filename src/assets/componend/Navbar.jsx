// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoInfokuliah from '../images/Infokuliah.png';
import avatarImage from '../images/avatar.png'; // Ganti dengan URL foto profil
import '../css/style.css';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            <>
              <div className="dropdown">
                < div className="" onClick={toggleDropdown}>
                  <div className="moon-avatar">
                    <img src={avatarImage} alt="Avatar" className="avatar" />
                  </div>
                </div>
                {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/profil/${id}" className="dropdown-link">Profil</Link>
                    <Link to="/mycourses" className="dropdown-link">My Kursus</Link>
                    <Link className="dropdown-link" onClick={logout}>Log Out</Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
