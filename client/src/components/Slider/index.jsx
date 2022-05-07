import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import SingleSlide from '../Single-slide';
import SliderModal from '../Slider-modal';

import sliderData from './data/slider-data.json';

import 'keen-slider/keen-slider.min.css';
import './slider.css';

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

  const [sliderList, setSliderList] = useState(sliderData);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div ref={sliderRef} className="keen-slider">
      {sliderList.map((slide) => {
        return (
          <SingleSlide onButtonClick={() => setActiveModal(slide)} image={slide.imageLink} key={slide.imageLink} />
        );
      })}
      {activeModal && (
        <SliderModal
          image={activeModal.imageLink}
          key={activeModal.imageLink}
          eventName={activeModal.eventName}
          info={activeModal.info}
          checkoutLink={activeModal.checkoutLink}
          location={activeModal.location}
          date={activeModal.dateTime}
          price={activeModal.price}
          onButtonClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
