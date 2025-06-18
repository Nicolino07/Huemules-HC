import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Fondos/logo.png";
import instagramIcon from "../images/Fondos/instagram.svg";
import "./NavBar.css"; // vamos a separar el CSS de la navbar

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="topbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/historia" onClick={() => setMenuOpen(false)}>Historia</Link>
          <Link to="/galeria" onClick={() => setMenuOpen(false)}>Galería</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      </div>

      <div className="nav-right">
        <a
          href="https://www.instagram.com/huemuleshcbariloche/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}
