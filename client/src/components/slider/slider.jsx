import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './slider.css';
import sliderData from '../../data/slider-data.json';
import SingleSlide from '../single-slide/single-slide';
import SliderModal from '../slider-modal/slider-modal';

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
  
  return (
    <div ref={sliderRef} className="keen-slider">
      {sliderList.map((slide, index) => {
        return <SingleSlide image={slide.imageLink} key={slide.imageLink} />;
      })}

      {/* <SliderModal 
        image={sliderData[0].imageLink} 
        key={sliderData[0].imageLink}
        eventName={sliderData[0].eventName} 
        info ={sliderData[0].info}
        checkoutLink={sliderData[0].checkoutLink} 
        location={sliderData[0].location} 
        date={sliderData[0].dateTime} 
        price={sliderData[0].price} 
        /> */}
    </div>
  );
}
