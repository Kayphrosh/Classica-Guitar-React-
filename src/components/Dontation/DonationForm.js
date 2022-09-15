import React from 'react';
import './donation-form.css';

import Navbar from '../landingPage/Navbar';
import Header from './Header';
import Footer from '../landingPage/Footer';

function DonationForm() {
  return (
    <div>
      <Navbar />
    <Header></Header>
      <div className="donation-form-container">
        <header>
          <h4>Personal Information</h4>
        </header>
        <form action="" class="donation-form">
          <div class="full-name">
            <span>
              <label for="first name">First Name</label>
              <input type="text" placeholder="Doe" />
            </span>
            <span>
              <label for="last name">Last Name</label>
              <input type="text" placeholder="John" />
            </span>
          </div>

          <label for="email">Email</label>
          <input type="email" placeholder="enter your email address" />

          <label for="phone number">Phone Number</label>
          <input type="tel" placeholder="8000000000" />

          <label for="Business Name">Business/Organization/Group Name</label>
          <input type="text" placeholder="enter your business name here" />

          {/* <button type="submit">Get Started</button> */}
        </form>

        <header>
          <h4>Enter An Amount</h4>
        </header>

        <form action="" className="donation-form">
          <label for="number">Amount in Dollar ($)</label>
          <input type="number" placeholder="$0" />

          <button type="submit">Donate</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default DonationForm;
