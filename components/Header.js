import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">Karina<span> Asanbekova</span></div>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;