import React, { useState } from 'react';
import './Achievements.css';

// Import your certificates from assets
import cert1 from '../../assets/certificate1.jpeg';
import cert2 from '../../assets/certificate2.jpeg';
import cert3 from '../../assets/certificate3.jpg';
import cert4 from '../../assets/certificate4.jpeg';
import cert5 from '../../assets/certificate5.jpeg';
import cert6 from '../../assets/certificate6.jpeg';
import cert7 from '../../assets/certificate7.jpeg';
import cert8 from '../../assets/certificate8.jpg';
import cert9 from '../../assets/certificate9.jpg';
import cert10 from '../../assets/certificate10.jpg';
import cert11 from '../../assets/certificate11.jpg';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      image: cert1,
      title: "Inter-State Music & Dance Competition",
      description: "Awarded by the Uttar Pradesh Sangeet Natak Akademi for securing first place in the Kathak dance category in divisional level competition"
    },
    {
      id: 2,
      image: cert2,
      title: "Zonal Solo Classical Dance Competition",
      description: "Awarded by the Directorate of Education, Delhi, for securing 2nd position in the Solo Classical Dance category (Senior Girls) at the Zonal Schools Sports & Cultural Activities"
    },
    {
      id: 3,
      image: cert3,
      title: "Delhi Kala Utsav",
      description: "Commended by Sanskar Bharati for a distinguished Kathak performance at the Delhi Kala Utsav, held at the Sangeet Natak Akademi complex"
    },
    {
      id: 4,
      image: cert4,
      title: "Kathakmoves Dance & Music Academy",
      description: "Awarded for a dedicated Kathak performance at the 2025 Dance Competition organized by Kathakmoves Dance & Music Academy, Pitampura."
    },
    {
      id: 5,
      image: cert5,
      title: "The Grand Gala",
      description: "Awarded by Indian Convent School for securing 1st position in the Solo Dance Competition"
    },
    {
      id: 6,
      image: cert6,
      title: "Udaan",
      description: "Awarded by Sugam Sangeet Nritaya Kala Manch for an exceptional Kathak performance in the presence of Chief Guest and Kathak Maestro Ram Mohan Maharaj"
    },
    {
      id: 7,
      image: cert7,
      title: "Mann Kalaa Darshan",
      description: "Awarded by The Ocean of Art for an outstanding cultural performance at the India Islamic Cultural Centre"
    },
    {
      id: 8,
      image: cert8,
      title: "Jashn-E-Tansen",
      description: "Recognized for a Kathak performance at the Tansen Music & Dance Festival, organized by Tansen Sangeet Mahavidyalaya at Tecnia Auditorium"
    },
    {
      id: 9,
      image: cert9,
      title: "Jashn-E-Tansen",
      description: "Awarded for a Kathak performance at the Jashn-E-Tansen Music & Dance Festival, held at Maharaja Agrasen Auditorium"
    },
    {
      id: 10,
      image: cert10,
      title: "Arpan Performing Arts",
      description: "Awarded for a fabulous performance by Arpan Performing Arts, Rohini, with recognition from Ashok Chakraborty of Kathak Kendra, New Delhi"
    },
    {
      id: 11,
      image: cert11,
      title: "Inter-House Cultural Dance Competition",
      description: "Awarded by Indian Convent School for securing 1st position in the Senior Solo category during Inter-House Cultural Dance Competition"
    },

  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    <section className="achievements reveal" id="achievements">
      <h2 className="section-heading">My Achievements</h2>
      
      <div className="achievements-container">
        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        
        <div className="achievement-display">
          {certificates.map((cert, index) => (
            <div 
              className={`cert-slide ${index === currentIndex ? "active" : ""}`} 
              key={cert.id}
            >
              <div className="cert-frame">
                <img src={cert.image} 
                alt={cert.title}
                loading={index === 0 ? "eager" : "lazy"} 
                fetchpriority={index === 0 ? "high" : "low"} />
              </div>
              <div className="cert-text">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="carousel-dots">
        {certificates.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Achievements;