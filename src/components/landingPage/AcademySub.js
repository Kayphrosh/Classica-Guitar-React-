import React from 'react';
import './academy.css'
function AcademySub() {
  return (
    <section class="academy-container">
      <header>
        <h2>
          Join Chocolate Africa Classical <br /> Guitar Academy
        </h2>
        <p>
          Gain access to online materials and one on one virtual training with
          experts from <br /> different part of the world
        </p>
      </header>

      <main class="levels">
        <div class="level" data-aos="fade-up">
          <span class="level-icon">
            <span class="iconify" data-icon="fe:beginner"></span>
          </span>
          <span class="level-text">
            <h4>Beginner Level</h4>
            <p>
              Join us as a beginner to get you <br /> prepared and skilled to
            </p>
          </span>

          <span class="level-cta">
            <p>+100 Resources Available</p>
            <button>Get Started</button>
          </span>
        </div>

        <div class="level" data-aos="fade-up">
          <span class="level-icon">
            <span
              class="iconify"
              data-icon="carbon:skill-level-intermediate"
            ></span>
          </span>
          <span class="level-text">
            <h4>Intermediate Level</h4>
            <p>
              Join us as a beginner to get you <br /> prepared and skilled to
            </p>
          </span>

          <span class="level-cta">
            <p>+60 Resources Available</p>
            <button>Get Started</button>
          </span>
        </div>

        <div class="level" data-aos="fade-up">
          <span class="level-icon">
            <span
              class="iconify"
              data-icon="carbon:skill-level-advanced"
            ></span>
          </span>
          <span class="level-text">
            <h4>Advanced Level</h4>
            <p>
              Join us as a beginner to get you <br /> prepared and skilled to
            </p>
          </span>

          <span class="level-cta">
            <p>+40 Resources Available</p>
            <button>Get Started</button>
          </span>
        </div>
      </main>

      <p class="biography-link">
        Check the list of teachers and their biography <a href="#">here</a>
      </p>

      <aside>
        <button>
            <img src={"./Images/arrow-down.svg"} alt=""/>
        </button>
        <p>Get In Touch</p>
    </aside>
    </section>
  );
}

export default AcademySub;
