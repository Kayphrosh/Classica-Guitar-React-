import React from 'react';
import Navbar from '../landingPage/Navbar';
import Header from './Header';
// import DonationProgess from './DonationProgess';
import HowToDonate from './HowToDonate';
import Footer from '../landingPage/Footer';
export default function Donation() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <DonationProgess/> */}
      <HowToDonate />
      <Footer />

    </div>
  );
}
