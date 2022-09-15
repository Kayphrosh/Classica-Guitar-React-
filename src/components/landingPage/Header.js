// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import HeaderImg1 from '../images/amb.JPG';
import HeaderImg2 from '../images/headerImg2.jpg';
import HeaderImg3 from '../images/headerImg3.jpg';
import HeaderImg4 from '../images/headerImg4.jpg';
import Navbar from './Navbar';

function Header() {

  return (
    <section className="heroe-container">
      <Navbar />
      <header className="heroe-section">
        <main className="heroe-text" data-aos="fade-up">
          <h2>Building The Africa Classical Guitar Society in Nigeria</h2>
          <p>
            Reviving Ethnic music and Classical Guitar Music in Africa through
            education, Arrangment and performance of African folksongs and
            compositions.
          </p>

          <div className="heroe-cta">
            <span>
              <Link to="/gallery">
                <button>Explore Gallery</button>
              </Link>
            </span>
            <span>
              <Link to="/donation">
                <button className="donate-header-btn">Donate</button>
              </Link>
            </span>
          </div>
        </main>

        <div className="big-image">
          <img src={HeaderImg1} alt="" />
          <img src={HeaderImg2} alt="" />
          <img src={HeaderImg3} alt="" />
          <img src={HeaderImg4} alt="" />
        </div>
      </header>
    </section>
  );
}

export default Header;
