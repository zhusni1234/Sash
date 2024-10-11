
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo or site name */}
      <div style={styles.logo}>
        <a href="/" style={styles.logoText}>MyWebsite</a>
      </div>

      {/* Navigation links (shown in desktop view) */}
      <ul style={{ ...styles.navLinks, ...(isOpen ? styles.navLinksOpen : null) }}>
        <li><a href="#home" style={styles.navLink}>Home</a></li>
        <li><a href="#packages" style={styles.navLink}>About</a></li>
        <li><a href="#catalogue" style={styles.navLink}>Services</a></li>
        <li><a href="#about" style={styles.navLink}>Contact</a></li>
      </ul>

      {/* Hamburger menu for mobile */}
      <div style={styles.hamburgerMenu} onClick={toggleMenu}>
        <span style={styles.hamburgerBar}></span>
        <span style={styles.hamburgerBar}></span>
        <span style={styles.hamburgerBar}></span>
      </div>
    </nav>
  );
};

// Inline styles for the component
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    backgroundColor: '#333',
    color: 'white',
    position: 'relative',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoText: {
    color: 'white',
    textDecoration: 'none',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    transition: 'all 0.3s ease',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  },
  hamburgerMenu: {
    display: 'none',
    flexDirection: 'column',
    gap: '0.3rem',
    cursor: 'pointer',
  },
  hamburgerBar: {
    backgroundColor: 'white',
    height: '3px',
    width: '25px',
    borderRadius: '2px',
  },
  navLinksOpen: {
    display: 'block',
    position: 'absolute',
    top: '60px',
    left: 0,
    backgroundColor: '#333',
    width: '100%',
    textAlign: 'center',
    flexDirection: 'column',
  },
  /* Media queries for mobile */
  '@media (max-width: 768px)': {
    navLinks: {
      display: 'none',
    },
    hamburgerMenu: {
      display: 'flex',
    },
  },
};

export default Navbar;
