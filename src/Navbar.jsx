import { useState } from "react";
import "./Navbar.css";
import logo from "./assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-bar">
      <a href="#home" className="logo-holder">
        <img src={logo} alt="company-img" />
        <h3>TheFineWorks.com</h3>
      </a>

      <button
        className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-btns ${menuOpen ? "open" : ""}`}>
        <a className="nav-links" href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a className="nav-links" href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a className="nav-links" href="#Project-section" onClick={() => setMenuOpen(false)}>
          Portfolio
        </a>
        <a className="nav-links" href="#why-us" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a className="nav-links" href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <a className="nav-button" href="#contact" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Navbar;
