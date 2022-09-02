import React from 'react';
import Navbar from '../landing/Navbar';
import Header from './Header';
// import DonationProgess from './DonationProgess';
import HowToDonate from './HowToDonate';
import Footer from '../landing/Footer';
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
