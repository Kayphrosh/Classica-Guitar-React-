import React from 'react';
import Header from './Header';
import About from './About';
import Objectives from './Objectives';
import AcademySub from './AcademySub';
import Contact from './Contact';
import UpcomingEvents from './UpcomingEvents';
import Footer from './Footer';

function LandingPage() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Objectives />
      <AcademySub />
      <Contact />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default LandingPage;
