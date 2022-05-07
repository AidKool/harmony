import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function DuoSection() {
  const fadeRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const fade = fadeRef.current;
    const trigger = triggerRef.current;
    gsap.fromTo(
      fade,

      { opacity: 0.5, translateY: 40, ease: 'power2.in', duration: 0 },

      {
        translateY: 0,
        duration: 1,
        opacity: 1,

        ease: 'power2.in',
        scrollTrigger: {
          start: 'top 80%',

          end: 'top 90%',
          translateY: 0,
          trigger: trigger,
          endTrigger: trigger,
          scrub: 0.8,
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="duo-section" ref={triggerRef}>
      <div className="duo-section-card-title-container" ref={fadeRef}>
        <div className="duo-section-title-holder">
          <p className="duo-title">Get rocking</p>
        </div>
        <div className="duo-card-container">
          <article className="duo-card dc1">
            <div className="duo-card-content-container">
              <p className="duo-card-title">About us</p>
              <Link className="duo-card-link" to="/about">
                Details
              </Link>
            </div>
          </article>

          <article className="duo-card dc2">
            <div className="duo-card-content-container">
              <p className="duo-card-title">Events</p>
              <Link className="duo-card-link" to="/hosting">
                Details
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default DuoSection;
