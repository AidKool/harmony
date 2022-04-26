import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './slider.css'

import React from 'react';

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    breakpoints: {
      '(min-width: 300px)': {
        slides: { perView: 1, spacing: 0 },
      },
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 0 },
      },
      '(min-width: 1025px)': {
        slides: { perView: 4, spacing: 0 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="poster-card-img"
              src="https://www.emp.co.uk/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw37169cd2/images/3/6/5/2/365217d-emp.jpg?sfrm=png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="poster-card-img"
              src="https://i.pinimg.com/474x/44/3b/4b/443b4bdb7d02cab5b81ef51436c1a189--band-posters-tour-posters.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img className="poster-card-img" src="https://i.gyazo.com/940d5938684df72553e0c669d07dc1b0.png" alt="" />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="poster-card-img"
              src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/063a5eb1-ce5b-4460-8c0b-fd5de8ec7397/emek5.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="poster-card-img"
              src="https://i.pinimg.com/originals/4e/ec/7a/4eec7a7d66a315c7b2b6f2ed3fe4702a.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide6">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img className="poster-card-img" src="https://i.gyazo.com/263dbe06b13b957015e2ea97cce84bfa.png" alt="" />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide7">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              className="poster-card-img"
              src="https://images.wolfgangsvault.com/m/xlarge/BG072-PO/the-paul-butterfield-blues-band-poster-jul-11-1967-jul-16-1967.webp"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="keen-slider__slide number-slide8">
        <div className="poster-card">
          <a href="https://www.google.com/" target="_blank">
            <img
              src="https://www.washingtonian.com/wp-content/uploads/2020/10/13.-Foo-Fighters-Troubadour.jpg"
              className="poster-card-img"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
