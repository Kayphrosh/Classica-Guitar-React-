import React from 'react';
import { Link } from 'react-router-dom';
import Thumbmail2018 from './Images/52.jpg';
import Thumbmail2019 from './2019EVENTS/3.jpg';
import Thumbmail2021 from './2021EVENTS/4.jpg';
import Thumbmail2022 from './2022EVENTS/4.jpg';
import Navbar from '../landingPage/Navbar';
import Footer from '../landingPage/Footer';

import './gallery.css';

function Gallery() {
  return (
    <section className="img-gallery-container">
      <Navbar />
      <header>
        <h3>Explore Gallery</h3>
      </header>
      <main className="image-gallery-sections">
        <Link to="/gallery/gallery2018">
          <div className="image-section">
            <img src={Thumbmail2018} />
            <footer>
              <p>2018 Event</p>
              <a>view all</a>
            </footer>
          </div>
        </Link>

        <Link to="/gallery/gallery2019">
          <div className="image-section">
            <img src={Thumbmail2019} />
            <footer>
              <p>Event 2019</p>
              <a>view all</a>
            </footer>
          </div>
        </Link>

        <Link to="/gallery/gallery2021">
          <div className="image-section">
            <img src={Thumbmail2021} />
            <footer>
              <p>Event 2021</p>
              <a>view all</a>
            </footer>
          </div>
        </Link>

        <Link to="/gallery/gallery2022">
          <div className="image-section">
            <img src={Thumbmail2022} />
            <footer>
              <p>Event 2021</p>
              <a>view all</a>
            </footer>
          </div>
        </Link>
      </main>

      <Footer />
    </section>
  );
}

export default Gallery;
