import React from 'react';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import AboutSection from '../../components/About-Section';

import './about.css';

function About() {
  return (
    <section className="about-page-container">
      <Nav />
      <AboutSection />
      <Footer />
    </section>
  );
}

export default About;
