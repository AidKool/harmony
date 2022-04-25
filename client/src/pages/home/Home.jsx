import React from 'react';
import './home.css';

import SliderSection from '../../components/slider-section/slider-section';
import Footer from '../../components/footer/Footer';
import HomeHero from '../../components/home-hero/home-hero';
import DuoSection from '../../components/duo-section/duo-section';
import QuestionSection from '../../components/question-section/question-section';



function home() {
  return (
    <div className="home-container">
      <HomeHero />
      <SliderSection />
      <DuoSection />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default home;
