// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Services from './Services';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Footer from './Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      <HeroSection />
      <Services />
      <Slider />
      <AboutUs />
      <Footer />
    
    </div>
  );
  
};

export default App;
