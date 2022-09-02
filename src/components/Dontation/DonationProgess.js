import React from 'react'
import './donation-progress.css'



function DonationProgess() {
  return (
    <div className='donation-progress'>
        <header>
            <h4>Our Progress So Far</h4>
        </header>
        <div className='progress'>
            <span>
                <h5>$128/$1000</h5>
                <p>Amount Raised(USD)</p>
            </span>

            <span>
                <h5>$128/$1000</h5>
                <p>Amount Raised(USD)</p>
            </span>

            <span>
                <h5>$128/$1000</h5>
                <p>Amount Raised(USD)</p>
            </span>

            <span>
                <h5>$128/$1000</h5>
                <p>Amount Raised(USD)</p>
            </span>
        </div>
    </div>
  )
}

export default  DonationProgess;