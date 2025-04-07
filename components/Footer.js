// components/Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/yellowlagoo" className="social-link" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/karina-asanbekova" className="social-link" target="_blank" rel="noopener noreferrer">👥 LinkedIn</a>
        </div>
        <p>&copy; {currentYear} Karina Asanbekova. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;