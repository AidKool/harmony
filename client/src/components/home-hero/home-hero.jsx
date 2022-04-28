import React from 'react';
import { Link } from 'react-router-dom';

function homeHero() {
  return (
    <section className="hero-section">
      <div className="home-cta-container">
        <p className="home-cta-title">Discover your perfect band</p>
        <Link className="home-cta-button" to="/feed">
          Lets go!
        </Link>
      </div>
      <div className="hero-container">
        <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
        <Link className="hero-button" to="/feed">
          Lets rock!
        </Link>
      </div>
    </section>
  );
}

export default homeHero;
