import React, { useState, useRef } from "react";
import "./MarqueeImageGallery.css";
import img1 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.52.jpeg';
import img2 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.53 (1).jpeg';
import img3 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.53 (2).jpeg';
import img4 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.53.jpeg';
import img5 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.54 (1).jpeg';
import img6 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.54.jpeg';
import img7 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.55 (1).jpeg';
import img8 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.14.55.jpeg';
import img9 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.15.04 (1).jpeg';
import img10 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.15.06.jpeg';
import img11 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.22.51 (1).jpeg';
import img12 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.22.52 (1).jpeg';
import img13 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.00 (1).jpeg';
import img14 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.15 (2).jpeg';
import img15 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.18 (1).jpeg';
import img16 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.20.jpeg';
import img17 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.22 (1).jpeg';
import img18 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-12 at 21.23.22.jpeg';
import img19 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.06.jpeg';
import img20 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.09 (1).jpeg';
import img21 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.16.jpeg';
import img22 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.17 (1).jpeg';
import img23 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.18.jpeg';
import img24 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.21.jpeg';
import img25 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.22 (1).jpeg';
import img26 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.22.jpeg';
import img27 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.23.jpeg';
import img28 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.49.32 (1).jpeg';
import img29 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.54.35.jpeg';
import img30 from '../../assets/Gallery Photos/Selected Photos/WhatsApp Image 2026-03-13 at 09.54.39.jpeg';
const images = [
  img1, img2, img3, img4, img5,
  img10, img11, img20,
  img12, img13, img15, img28, img16, img6,
  img17, img18, img19, img7,
  img21, img22, img23, img24, img9,
  img25, img26, img27, img29,
  img30, img8, img14
];

const scrollSpeed = 2500;

const titles = [
  { id: "img-01", title: "Grace in Motion" },
  { id: "img-02", title: "Rhythm of Kathak" },
  { id: "img-03", title: "Expressions of Devotion" },
  { id: "img-04", title: "Dancing Through Emotion" },
  { id: "img-05", title: "Timeless Classical Grace" },
  { id: "img-10", title: "Echoes of Tradition" },
  { id: "img-11", title: "Flow of Elegance" },
  { id: "img-12", title: "Dancing with Devotion" },
  { id: "img-13", title: "A Story Through Movement" },
  { id: "img-15", title: "Grace Beyond Words" },
  { id: "img-28", title: "Storytelling Through Kathak" },
  { id: "img-16", title: "Essence of Kathak" },
  { id: "img-06", title: "Abhinaya in Focus" },
  { id: "img-17", title: "Dance of Expressions" },
  { id: "img-18", title: "Language of Movement" },
  { id: "img-19", title: "Classical Grace Unfolding" },
  { id: "img-20", title: "When Rhythm Meets Soul" },
  { id: "img-07", title: "Rhythm in Every Step" },
  { id: "img-21", title: "Elegance in Every Gesture" },
  { id: "img-22", title: "A Moment on Stage" },
  { id: "img-23", title: "Spirit of Dance" },
  { id: "img-24", title: "Where Rhythm Comes Alive" },
  { id: "img-09", title: "The Art of Expression" },
  { id: "img-25", title: "Art in Motion" },
  { id: "img-26", title: "Emotion Through Dance" },
  { id: "img-27", title: "A Classical Journey" },
  { id: "img-29", title: "Harmony of Rhythm and Grace" },
  { id: "img-30", title: "Dancing with the Soul" },
  { id: "img-08", title: "Poetry in Motion" },
  { id: "img-14", title: "The Beauty of Classical Rhythm" }
];

const MarqueeImageGallery = () => {

  const [stopScroll, setStopScroll] = useState(false);
  // NEW: state for opening image modal
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const resumeTimeout = useRef(null);

  const cardData = images.map((image, index) => ({
    image,
    id: titles[index]?.id || `img-${index}`,
    title: titles[index]?.title || `Performance ${index + 1}`
  }));

  const handleUserInteraction = () => {

  // stop animation immediately
  setStopScroll(true);

  // clear previous timer
  if (resumeTimeout.current) {
    clearTimeout(resumeTimeout.current);
  }

  // resume after 3 seconds
  resumeTimeout.current = setTimeout(() => {
    setStopScroll(false);
  }, 1000);
};

  return (
    <section className="gallery" id="gallery">
    <h2 className="section-heading">Gallery</h2>
    <div
      ref={containerRef}
    className="marquee-container"
    onMouseEnter={() => setStopScroll(true)}
    onMouseLeave={() => setStopScroll(false)}
>

      <div className="marquee-gradient-left" />

      <div
        className="marquee-inner"
        style={{
          animationPlayState: stopScroll || selectedImage ? "paused" : "running",
          animationDuration: `${cardData.length * scrollSpeed}ms`,
          willChange: "transform"
        }}
      >

        <div className="marquee-cards">

          {[...cardData, ...cardData].map((card, index) => (

            <div
              key={`${card.id}-${index}`}
              className="marquee-card group"
              data-id={card.id}
              onClick={() => setSelectedImage(card)}
            >

              <img
                src={card.image}
                alt={`Kathak performance - ${card.title}`}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="marquee-card-img"
              />

              <div className="marquee-card-overlay">
                <p className="marquee-card-title">
                  {card.title}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="marquee-gradient-right" />

    </div>
    {/* NEW: Image Modal / Lightbox */}
      {selectedImage && (
        <div
          className="gallery-modal"

          /* clicking background closes modal */
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="gallery-modal-content"

            /* prevent closing when clicking image */
            onClick={(e) => e.stopPropagation()}
          >

            <img src={selectedImage.image} alt={selectedImage.title} />

            <p>{selectedImage.title}</p>

          </div>

        </div>
      )}

    </section>
  );
};

export default MarqueeImageGallery;