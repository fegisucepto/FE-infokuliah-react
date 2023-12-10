import logoInfokuliah from '../images/InfoKuliah.png';
import { Link } from 'react-router-dom';
import '../css/style.css'

export default function Navbar() {
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
                <Link className="nav-link" to="/Courses">
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
            <Link className="btn register-btn" to="/register" role="button">
              Register
            </Link>
            <Link className="btn login-btn" to="/login" role="button">
              Login
            </Link>
            {/* Logika untuk tombol Logout */}
          </div>
        </div>
      </div>
  );
}
