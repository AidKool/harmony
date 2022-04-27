import React from 'react';
import { NavLink } from 'react-router-dom';

function homeHero() {
  return (
    <section className="hero-section">
      <div className="home-cta-container">
        <p className="home-cta-title">Discover your perfect band member</p>
        <NavLink className="home-cta-button" to="/feed">
          Lets go!
        </NavLink>
      </div>
      <div className="hero-container">
        <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
        <NavLink className="hero-button" to="/feed">
          Lets rock!
        </NavLink>
      </div>
    </section>
  );
}

export default homeHero;
