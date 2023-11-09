import React from 'react';
import '../../App.css';
import Services from '../Cards/Cards';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Mission from '../Mission/Mission';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;