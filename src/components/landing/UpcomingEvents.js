import React from 'react';
import './upcoming.css'
import EventPoster from '../images/poster.jpg'

function UpcomingEvents() {
  return (
    <section class="upcoming-event-container">
      <header>
        <span>
          <h3>Upcoming Events</h3>
        </span>
        <a href="#">See all</a>
      </header>
      <main class="events">
        <div class="event" data-aos="fade-up">
          <img src={EventPoster} alt="" />
          <button> Register</button>
        </div>
        <div class="event" data-aos="fade-up">
        <img src={EventPoster} alt="" />
          <button> Register</button>
        </div>
        <div class="event" data-aos="fade-up">
        <img src={EventPoster} alt="" />
          <button> Register</button>
        </div>
      </main>
      <div class="explore-gallery-btn">
        <button>Explore Gallery</button>
      </div>
    </section>
  );
}

export default UpcomingEvents;
