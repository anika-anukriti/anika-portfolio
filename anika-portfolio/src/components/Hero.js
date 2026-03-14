import React from 'react';
import anikaImage from '../assets/WhatsApp Image 2025-12-28 at 22.10.30.jpeg';

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="floating">
            <span className="boldheading">A</span>nika{'   '}
            <span className="highlight">
              <span className="boldheading">A</span>nukriti
            </span>
          </h1>
          <h2 className="floating">
            <span className="highlight">Classical </span>Dancer
          </h2>
          {/* <p>Dance is not just steps... it’s the feeling that flows within me.</p> */}
          <p>Expressing rhythm, grace, and devotion through Kathak.</p>
          <button className="btn" onClick={scrollToSection}>Discover More</button>
        </div>
        <div className="hero-image">
          <img src={anikaImage} className="anika-dancing" alt="Anika dancing" />
        </div>
      </div>
    </section>
  );
};

export default Hero;