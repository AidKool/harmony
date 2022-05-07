import React from 'react';
import gsap, { Power1 } from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RecordPlayer from './components/RecordPlayer';
import MusicNote from './components/MusicNote';
import MusicNoteTwo from './components/MusicNoteTwo';
import ScrollArrow from './components/Scroll-arrow';

import './scroll-animation.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {
  const imgRef = useRef(null);
  const conRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    const trigger = conRef.current;
    gsap.fromTo(
      el,

      { rotation: 0 },

      {
        rotation: 720,
        duration: 1,
        ease: Power1.easeOut,
        scrollTrigger: {
          start: 'top center',
          trigger: trigger,
          scrub: 0.9,
          toggleActions: 'play pause pause reverse',
          end: 'bottom 10%',
        },
      }
    );
  }, []);

  return (
    <section className="animation-section-container" ref={conRef}>
      <div className="record-container">
        <RecordPlayer />
      </div>
      <div className="section-circle" ref={imgRef}>
        <img className="scroll-img" src={require('./assets/record.png')} />
      </div>
      <p className="animation-scroll-container-text">SCROLL</p>

      {/* <div className="scroll-arrow-container-right ">
        <MusicNote />
      </div> */}

      <div className="music-note-container mnone">
        <MusicNote />
      </div>
      <div className="music-note-container mntwo">
        <MusicNote />
      </div>
      <div className="music-note-container mnthree">
        <MusicNoteTwo />
      </div>
      <div className="music-note-container mnfour">
        <MusicNoteTwo />
      </div>
    </section>
  );
}

export default ScrollAnimation;
