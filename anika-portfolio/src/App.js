import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"; // FIXED
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import MarqueeImageGallery from './components/Gallery/MarqueeImageGallery';
// import MarqueeGallery from './components/MarqueeGallery';
import About from './components/About/About';
import Videos from './components/Videos/Videos';
import Achievements from './components/Achievements/Achievements';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Footer from './components/Footer/Footer';
import GalleryPage from "./components/Pages/GalleryPage/GalleryPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleInitialScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 600);
        }
      }
    };

    window.addEventListener('load', handleInitialScroll);
    handleInitialScroll();

    return () => window.removeEventListener('load', handleInitialScroll);
  }, []);

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Achievements />
            <MarqueeImageGallery />
            {/* <MarqueeGallery /> */}
            <Videos />
            <ScrollToTop />
            <Footer />
          </div>
        }
      />

      {/* Gallery Page */}
    </Routes>
  );
}

export default App;