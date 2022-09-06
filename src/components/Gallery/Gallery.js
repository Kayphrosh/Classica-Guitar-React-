import React from 'react'
import { Link } from 'react-router-dom';
import Thumbmail from './Images/34.JPG'
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';

import './gallery.css'

function Gallery() {
  return (
    <section className="img-gallery-container">
        <Navbar />
        <header>
            <h3>Explore Gallery</h3>
        </header>
        <main className="image-gallery-sections">
            <Link to="/gallery/gallery2018">
                <div className='image-section'>
                    <img src={Thumbmail} alt="" />
                    <footer>
                        <p>2018 Event</p>
                        <a>view all</a>
                    </footer>
                </div>
            </Link>


            <div className='image-section'>
                <img src={Thumbmail} alt="" />
                <footer>
                    <p>Event 2019</p>
                    <a>view all</a>
                </footer>
            </div>

            <div className='image-section'>
                <img src={Thumbmail} alt="" />
                <footer>
                    <p>Event 2020</p>
                    <a>view all</a>
                </footer>
            </div>

            <div className='image-section'>
                <img src={Thumbmail} alt="" />
                <footer>
                    <p>Event 2021</p>
                    <a>view all</a>
                </footer>
            </div>
        </main>

        <Footer />
    </section>
  )
}



export default Gallery;
