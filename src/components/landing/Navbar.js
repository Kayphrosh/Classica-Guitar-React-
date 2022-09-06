

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.PNG';
import './navbar.css';
// import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false)


  const SidebarLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
    {
      title: 'Donate',
      path: '/donation',
    },
    {
      title: 'Contact Us',
      path: '/',
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
        <span className="iconify" id="open" data-icon="bx:menu"></span>
        <span
          className="iconify"
          id="close"
          data-icon="material-symbols:close"
        ></span>
      </div>
      <ul className="nav-links nav-active" open={open}>
        {SidebarLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link to={link.path}>
                <span>{link.title}</span>
              </Link>
            </li>
          );
        })}

      </ul>

      <div className="cta-btn">
        <Link to="/donation">
          <button>Donate Now</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
