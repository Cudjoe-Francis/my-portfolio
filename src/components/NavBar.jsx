import React, { useState } from 'react';
import "../css/NavBar.css";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // for hamburger icons

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='Navbar-container'>
      <div className="logo-container">Portfolio</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`navbar-links-container ${menuOpen ? "open" : ""}`}>
        <Link to='/' className='navbar-links' onClick={toggleMenu}>Home</Link>
        <Link to='/skills' className='navbar-links' onClick={toggleMenu}>Skills</Link>
        <Link to='/projects' className='navbar-links' onClick={toggleMenu}>Projects</Link>
        <Link to='/contact' className='navbar-links' onClick={toggleMenu}>Contact</Link>
        <Link to='/about' className='navbar-links' onClick={toggleMenu}>About Me</Link>
      </div>
    </div>
  );
}

export default NavBar;
