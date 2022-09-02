import React from 'react';
import './footer.css'
function Footer() {
  return (
    <footer class="main-footer">
      <div class="waiting-list-footer">
        <h4>Join The Waiting List</h4>
        <form action="">
          <input
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button>Get Early Access</button>
        </form>
      </div>

      <main class="footer-nav-container">
        <div class="footer-nav">
          <h6>About Us</h6>

          <ul>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">Pioneers</a>
            </li>
            <li>
              <a href="#">Volunteers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer-nav">
          <h6>Company</h6>

          <ul>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div class="footer-nav">
          <h6>About Us</h6>

          <ul>
            <li>
              <a href="#">Beginner</a>
            </li>
            <li>
              <a href="#">Intermediate</a>
            </li>
            <li>
              <a href="#">Master</a>
            </li>
            <li>
              <a href="#">Teachers Profile</a>
            </li>
          </ul>
        </div>

        <div class="footer-nav">
          <h6>Resources</h6>

          <ul>
            <li>
              <a href="#">Composers & their works</a>
            </li>
            <li>
              <a href="#">Arrangers & their works</a>
            </li>
            <li>
              <a href="#">Festival and Competions</a>
            </li>
          </ul>
        </div>

        <div class="footer-logo">
          <img src="./Images/logo.PNG" alt="" />
          <div class="contact-sm">
            <span class="iconify" data-icon="akar-icons:twitter-fill"></span>
            <span class="iconify" data-icon="bxl:facebook"></span>
            <span class="iconify" data-icon="bi:medium"></span>
            <span class="iconify" data-icon="bxl:instagram-alt"></span>
          </div>
        </div>
      </main>

      <small>
        Africa Classical Guitar Society @ 2021 | All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
