import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section class="contact-container" id="contact-us">
      <div class="contact-details-container">
        <header>
          <h2>Contact Information</h2>
        </header>
        <main class="contact-details">
          <div>
            <span>
              <iconify-icon className="contact-icon" icon="fluent:call-28-filled"></iconify-icon>
            </span>
            <span>
              <h6>Call Us</h6>
              <p>+238111226837, +238111226837</p>
            </span>
          </div>
          <div>
            <span>
              <iconify-icon className="contact-icon" icon="dashicons:whatsapp"></iconify-icon>
            </span>
            <span>
              <h6>Chat With Us</h6>
              <p>+238111226837</p>
            </span>
          </div>
          <div>
            <span>
              <iconify-icon className="contact-icon" icon="carbon:location-filled"></iconify-icon>
            </span>
            <span>
              <h6>Visit Us</h6>
              <p>Oshodi Lagos State, Nigeria</p>
            </span>
          </div>

          <div>
            <span>
              <iconify-icon className="contact-icon" icon="eva:message-square-fill"></iconify-icon>
            </span>
            <span>
              <h6>Send Us An Email</h6>
              <p>olakunbiolabode@yahoo.com</p>
            </span>
          </div>
        </main>

        <footer class="contact-sm">
          <span class="iconify" data-icon="akar-icons:twitter-fill"></span>
          <span class="iconify" data-icon="bxl:facebook"></span>
          <span class="iconify" data-icon="bi:medium"></span>
          <span class="iconify" data-icon="bxl:instagram-alt"></span>
        </footer>
      </div>

      <div class="contact-form-container">
        <header>
          <h2>Do You Have Questions</h2>
          <p>Write to us if you have any inquiry about us.</p>
        </header>

        <main>
          <form action="" class="contact-form">
            <span data-aos="fade-down">
              <label for="text">Full Name</label>
              <input type="text" placeholder="John Doe" />
            </span>

            <span data-aos="fade-down">
              <label for="email">Email Address</label>
              <input type="email" placeholder="johndoe@emails.com" />
            </span>

            <span data-aos="fade-down">
              <label for="email">Your Message</label>
              <input type="email" />
            </span>

            <button>Send Message</button>
          </form>
        </main>
      </div>
    </section>
  );
}
