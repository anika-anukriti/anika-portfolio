import React, { useState, useEffect, useRef } from "react";
import "./Videos.css";

const videoData = [
  {
    id: "SvNrnUe6xEA",
    title: "Shyama Pyaari",
    description: "The Gopis adorn themselves, eager to meet Krishna, in pure love and devotion",
    category: "Classic",
  },
  {
    id: "Tv7wi2p9xp0",
    title: "Bhari Bhari",
    description: "Along village paths they walk with water pots, hearts forever drawn to Krishna",
    category: "Classic",
  },
  {
    id: "OTy_IqB7uF8",
    title: "Gopala Sundaram",
    description: "A glimpse of Gopala’s divine charm becomes the source of bliss and devotion",
    category: "Classic",
  },
  {
    id: "gl71_KFRUWM",
    title: "Shyaam Murat Mann Bhaaye",
    description: "Devotional hymn celebrating the love and beauty of Krishna",
    category: "Devotional",
  },
  {
    id: "Pf9CQJ31X4U",
    title: "Aadiyogi",
    description: "A soulful journey into the cosmic vibrations of Aadiyogi.",
    category: "Devotional",
  },
  {
    id: "1pnd0ozQ2xk",
    title: "Shiva: The Beginning",
    description: "Began the Journey to find Myself with the Blessings of Mahadev",
    category: "Devotional",
  },
  {
    id: "ioxaF4ZJ3to",
    title: "Prem ka Aamantran",
    description: "Sachha Prem Roop nahi Bhaav hai",
    category: "Abhinaya",
  },
  {
    id: "gBPGtrVJnl0",
    title: "A Glance of Love",
    description: "An abhinaya performance capturing the power of a single glance",
    category: "Abhinaya",
  },
  {
    id: "WSQfpICu2E4",
    title: "Mohe Rang Do Laal",
    description: "A classical dance expressing deep emotions through abhinaya",
    category: "Abhinaya",
  },
  {
    id: "_p7m-_Gv3zQ",
    title: "O Re Piya",
    description: "An abhinaya performance expressing love and longing through dance",
    category: "Abhinaya",
  },
  {
    id: "owwnv9-ouW4",
    title: "Aaj Mere Piya Ghar Aayenge",
    description: "An abhinaya portrayal of joy and anticipation as Piya returns home",
    category: "Abhinaya",
  },
  {
    id: "sMtFK_6Z3PU",
    title: "Ek Ajnabee Haseena Se",
    description: "An abhinaya performance capturing the charm of a mysterious beauty",
    category: "Abhinaya",
  },
  {
    id: "vkNrp3sVyLY",
    title: "Bas Teri Aahatein",
    description: "An abhinaya performance expressing longing through subtle gestures",
    category: "Abhinaya",
  },
  {
    id: "By6GLXZPvsE",
    title: "Ae Ri Sakhi",
    description: "An abhinaya performance portraying heartfelt conversations with a friend",
    category: "Abhinaya",
  },
  {
    id: "irxHfkh3yrc",
    title: "Happy Holi",
    description: "A vibrant short performance celebrating colors and the joy of Holi",
    category: "Abhinaya",
  }
];

const categories = ["All", "Classic", "Devotional", "Abhinaya"];

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const filtered = activeCategory === "All" 
      ? videoData 
      : videoData.filter((v) => v.category === activeCategory);
    setFilteredVideos(filtered);
    setCurrentPage(0);
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
  }, [activeCategory]);

  const itemsPerPage = window.innerWidth <= 768 ? 1 : 3;
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  const scrollToPage = (pageIndex) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: pageIndex * containerWidth,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

 const openYoutube = (id) => {
    // Detect if the screen is mobile-sized (768px or less)
    const isMobile = window.innerWidth <= 768;
    
    // Desktop: opens in new tab (_blank)
    // Mobile: opens in same tab (_self)
    const target = isMobile ? "_self" : "_blank";
    
    window.open(`https://www.youtube.com/watch?v=${id}`, target);
  };

  return (
    <section className="videos reveal" id="videos">
      <h2 className="section-heading">My Performances</h2>

      <div className="video-tabs">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`tab ${activeCategory === cat ? "active-tab" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="videos-glass-container">
        <button 
          className="nav-arrow left" 
          onClick={() => scrollToPage(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
        >
          ❮
        </button>

        <div className="video-carousel-wrapper" ref={carouselRef}>
          <div className="video-carousel-inner">
            {filteredVideos.map((video, index) => (
              <div
                className="video-card"
                key={index}
                onClick={() => openYoutube(video.id)}
              >
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="nav-arrow right" 
          onClick={() => scrollToPage(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
        >
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            className={`dot ${currentPage === i ? "active-dot" : ""}`}
            onClick={() => scrollToPage(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Videos;