import React, { useState } from 'react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './question-section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function QuestionSection() {
  const [activeQuestionModal, setActiveQuestionModal] = useState(null);

  const fadeRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const fade = fadeRef.current;
    const trigger = triggerRef.current;
    gsap.fromTo(
      fade,

      { opacity: 0.2, translateY: 40, ease: 'power1.in', duration: 0 },

      {
        translateY: 0,
        duration: 1,
        opacity: 1,

        ease: 'power1.in',
        scrollTrigger: {
          start: 'top 80%',

          end: 'top 90%',
          translateY: 0,
          // markers: true,
          trigger: trigger,
          endTrigger: trigger,
          scrub: 0.8,
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="questions-section" ref={triggerRef}>
      <div className="questions-container" ref={fadeRef}>
        <div className="question-title-holder">
          <h2 className="question-title-heading">Got any questions?</h2>
          <p className="questions">
            If you need any help with anything.
            <br /> Please feel free to get in touch
          </p>
          <button onClick={setActiveQuestionModal} className="help-button">
            Contact
          </button>
        </div>
        <img
          className="questions-image"
          src={require('../../pages/home/assets/music-illustrations-lim-heng-swee-fb4.png')}
        />
      </div>

      {activeQuestionModal && (
        <article className="question-modal">
          <div className="question-modal-container">
            <FontAwesomeIcon
              className="sub-modal-x-button"
              onClick={() => setActiveQuestionModal(null)}
              icon={faXmarkCircle}
            />

            <h2 className="question-content-modal-title">Need help?</h2>
            <p className="question-content-modal-help">
              We are always here to help you with any problems you might have.
            </p>

            <a className="help-link" target="_blank" href="https://github.com/AidKool/harmony">
              <span className="question-hello-span">Say hello</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="question-modal-link-container">
              <div className="link-container-position">
                <div className="question-modal-button-link-circle qmblc1">
                  <Link href="https://github.com/Alistairhoughton" target="_blank">
                    <img
                      className="question-modal-circle-image"
                      src={require('./assets/aliAvatar.png')}
                      alt="alistair"
                    />
                  </Link>
                </div>
                <div className="question-modal-button-link-circle qmblc2">
                  <Link href="https://github.com/mattglwilliams" target="_blank">
                    <img className="question-modal-circle-image" src={require('./assets/mattAvatar.jpg')} alt="matt" />
                  </Link>
                </div>
                <div className="question-modal-button-link-circle qmblc3">
                  <Link href="https://github.com/HarkyDev" target="_blank">
                    <img className="question-modal-circle-image" src={require('./assets/eoinAvatar.png')} alt="eoin" />
                  </Link>
                </div>
                <div className="question-modal-button-link-circle qmblc4">
                  <Link href="https://github.com/AidKool" target="_blank">
                    <img
                      className="question-modal-circle-image"
                      src={require('./assets/jordiAvatar.jpg')}
                      alt="jordi"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default QuestionSection;
