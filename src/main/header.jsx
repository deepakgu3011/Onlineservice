import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Automatically close menu if switching to desktop
      if (!mobile) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Styles
  const navStyle = {
    backgroundColor: 'blanchedalmond',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    flexWrap: 'wrap',
    position: 'sticky',
    top: '0',
    zIndex:1,
  };

  const navLinksStyle = {
    display: isMobile ? (showMenu ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '10px',
    width: isMobile ? '100%' : 'auto',
  };

  const hamburgerStyle = {
    display: isMobile ? 'block' : 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    userSelect: 'none',
    marginRight: '3rem',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'green',
    padding: '10px 20px',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    margin: isMobile ? '10px 0' : '0 10px',
  };

  return (
    <nav style={navStyle}>
      <div className="logo">
        <a href="/"><img
          src="/logo192.png"
          alt="Logo"
          style={{ height: '60px', mixBlendMode: 'multiply' }}
        /></a>
      </div>

      <div style={hamburgerStyle} onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>

      <div style={navLinksStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/about" style={navLinkStyle}>
          About
        </Link>
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
        <Link to="/services" style={navLinkStyle}>
          Service
        </Link>
        <Link to="/privacy-policy" style={navLinkStyle}>
          Privacy Policy
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
