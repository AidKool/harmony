import React from 'react'

function homeHero () {
  return (
    <section className="hero-section">
      <div className="home-cta-container">
        <p className="home-cta-title">Discover your perfect band member</p>
        <button className="home-cta-button">Lets go!</button>
      </div>
      <div className="hero-container">
        <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
        <button className="hero-button">Lets rock!</button>
      </div>
    </section>
  );
}

export default homeHero