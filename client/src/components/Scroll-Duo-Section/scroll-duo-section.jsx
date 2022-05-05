import React from 'react';
import './scroll-duo-section.css'

function ScrollDuoSection() {

  return (
    <section className="duo-section scroll-duo-section">
      <div className="duo-section-card-title-container">
        <div className="duo-section-title-holder">
          <p className="duo-title">Host unreal events</p>
        </div>
        <div className="duo-card-container dccfdc">
          <article className="duo-card dc3">
            <div className="duo-card-content-container-scroll">
              <p className="duo-card-title">
                Contact our <br /> events team
              </p>
              <a target="_blank" className="duo-card-link" href="https://github.com/AidKool/harmony">
                Say Hello
              </a>
            </div>
          </article>

          <article className="duo-card dc4">
            <div className="duo-card-content-container"></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ScrollDuoSection;
