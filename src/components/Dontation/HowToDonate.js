import React from 'react';
import './how-to-donate.css';
import { Link } from 'react-router-dom';

function HowToDonate() {
  return (
    <div className="how-to-donate-container">
      <header>
        <h4>How To Donate</h4>
        <p>Choose the best way you would like to support the society below</p>
      </header>
      <main className="how-to-donate">
        <div>
          <h5>One TIme Donation</h5>
          <p>
            Every contribution makes a huge difference. Your Donation goes a
            long way
          </p>
          <Link>
          <button>Donate</button>
          </Link>
        </div>

        <div>
          <h5>Recurring Donations</h5>
          <p>
            Every contribution makes a huge difference. Your Donation goes a
            long way
          </p>

          <Link>
          <button>Donate</button>
          </Link>
        </div>

        <div>
          <h5>Become A Sponsor</h5>
          <p>
            Every contribution makes a huge difference. Your Donation goes a
            long way
          </p>
          <Link>
          <button>Donate</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HowToDonate;
