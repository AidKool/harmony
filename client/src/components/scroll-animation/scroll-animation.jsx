import React from 'react'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './scroll-animation.css'
import ScrollArrow from './components/Scroll-arrow'
gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {

const imgRef = useRef(null);
const conRef = useRef(null);

useEffect(() => {
  const el = imgRef.current;
  const trigger = conRef.current;
  gsap.fromTo(
    el,

    { rotation: 0, xPercent: -330 },

    {
      rotation: 720,
      duration: 1,
      xPercent: 330,
      scrollTrigger: {
        start: 'top center',
        // markers: true,
        trigger: trigger,
        endTrigger: trigger,
        scrub: 0.9,
        toggleActions: 'play pause pause reverse',
        end: 'bottom 30%',
      },
    }
  );
}, []);


  return (
    <section className="animation-section-container" ref={conRef}>
      <div className="section-circle" ref={imgRef}>
        <img className="scroll-img" src={require('./assets/record.png')} />
      </div>
      <p className="animation-scroll-container-text">SCROLL</p>
      <div className="scroll-arrow-container-right">
        <ScrollArrow />
      </div>
      <div className="scroll-arrow-container-left">
        <ScrollArrow />
      </div>
    </section>
  );
}

export default ScrollAnimation;