import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="Gyoza Go Logo" className="logo-img" />
        </Link>
        <input
          id="nav-toggle"
          className="nav-toggle"
          type="checkbox"
          aria-label="Toggle navigation"
        />
        <label htmlFor="nav-toggle" className="hamburger" aria-hidden>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Menu
          </NavLink>
          <a href="#tentang">Tentang</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
