import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* BRAND */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">I</span>

          <span className="brand-text">
            Ignishun<span>Tech</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <a href="/ignishuntech/client/login" className="client-login">
            Client Login
          </a>

          <a href="#contact" className="nav-cta">
            Get Started
            <span>→</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="/ignishuntech/client/login"
          className="mobile-login"
          onClick={closeMenu}
        >
          Client Login
        </a>

        <a
          href="#contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Get Started →
        </a>

      </div>
    </header>
  );
}

export default Navbar;