  import React from 'react'

import Slider from '../slider/slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';

function sliderSection () {
  return (
    <section className="slider-section">
      <div className="home-title-holder">
        <p className="slider-title">
          <FontAwesomeIcon className="slider-arrow" icon={faAnglesLeft} />
          Explore amazing events <FontAwesomeIcon className="slider-arrow" icon={faAnglesRight} />
        </p>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
    </section>
  );
}

export default sliderSection