import React from 'react';
import { useState } from 'react';
import './about.css';
function About() {
  const [selected, setSelected] = useState(null);

  let i = 0;

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className="about-container" id="about">
      {/* <aside className="mission">
        <span>
          <p>Our Mission</p>
        </span>
        <h3 data-aos="fade-up">
          To enlighten African guitarists on the importance of Guitar literacy,
          through Classical Guitar Music Education; exposing African guitarists
          to the benefits of learning how to read and write sheet music
          notations.
        </h3>
      </aside> */}
      <main className=" about">
        <div>
          <header data-aos="fade-up">
            <h6>Our Vision For The Society</h6>
          </header>
          <p data-aos="fade-up">
            vision of creating interest for the classical guitar (Spanish
            Guitar) and its music in Nigeria and Africa at large. With the
            support of Goethe institute and the Spanish consulate, also with the
            donation of Spanish Guitars by Jose Ramírez Guitar company from
            Spain, the society in 2018 held successfully the first free Public
            Master Class and workshop for the Classical Guitar in Lagos Nigeria
          </p>
          {/* <!-- <a data-aos="fade-up" href="#">Read more</a> --> */}
        </div>

        <div>
          <header data-aos="fade-up">
            <h6>About The Society</h6>
          </header>
          <p data-aos="fade-up">
            Chocolate Africa Classical Guitar Society (Established, 2017) is a
            Society with the vision of creating interest for the classical
            guitar (Spanish Guitar) and its music in Nigeria and Africa at
            large. With the support of Goethe institute and the Spanish
            consulate, also with the donation of Spanish Guitars by Jose Ramírez
            Guitar company from Spain,
            <span
              className={
                selected === i ? 'read-more-text-show' : 'read-more-text'
              }
            >
              the society in 2018 held successfully the first free Public Master
              Class and workshop for the Classical Guitar in Lagos Nigeria and
              in 2019, the first Multicultural concert for the Classical Guitar
              was held in Lagos where some Folk songs arrangements for the
              Classical Guitar were performed. More so, these folk song
              arrangements have been performed in other concerts in the world
              also for Music Education Recitals such as Doctoral Recital in the
              United States of America, for Master of Music Recitals and also
              for Concert in different countries in Europe, Africa and Asia.
            </span>
          </p>
          <button
            data-aos="fade-up"
            className="read-more-btn"
            onClick={() => toggle(i)}
          >
            {selected === i ? 'Read less' : 'Read More'}
          </button>
        </div>

        <div>
          <header data-aos="fade-up">
            <h6 className="our-mission-header">Our Mission</h6>
            <h6 className="our-history-header">Our History</h6>
          </header>

          <p className="our-mission-text" data-aos="fade-up">
            To bring unity to black nations through the Classical Guitar music;
            establishing a global standard interaction between Africa and other
            continents through performance of arranged folk music from different
            tribes of Africa for the Classsical Guitar and establishing an
            intentionally recognised Classical Guitar society that upholds
            African music and cultural heritage through multicultural concerts
            and festivals.
          </p>
          <p className="our-history-text" data-aos="fade-up">
            To bring unity to black nations through the Classical Guitar music;
            establishing a global standard interaction between Africa and other
            continents through performance of arranged folk music from different
            tribes of Africa for the Classsical Guitar and establishing an
            intentionally recognised Classical Guitar society that upholds
            African music and cultural heritage through multicultural concerts
            and festivals.
          </p>
        </div>
      </main>

      <div className="about-btn">
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default About;
