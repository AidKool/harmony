import React from 'react';

import SliderSection from '../../components/Slider-section';
import Footer from '../../components/Footer';
import HomeHero from '../../components/Home-hero';
import DuoSection from '../../components/Duo-section';
import QuestionSection from '../../components/Question-section';
import Nav from '../../components/Nav';

import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <HomeHero />
      <SliderSection />
      <DuoSection />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default Home;
