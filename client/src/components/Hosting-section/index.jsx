import React from 'react';
import Scroll from '../Scroll-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import './hosting-section.css';

function HostingSection() {
  return (
    <section>
      <div className="hosting-top-half">
        <h2 className="hosting-title">Want to host an event on our site?</h2>
        <p className="hosting-content">
          Harmony has a rich and diverse audience to be tapped into. Managing events couldn't be easier. All you have to
          do is send our events team and we will set it up for you.
        </p>
        <FontAwesomeIcon className="hosting-arrow" icon={faAnglesDown} />
      </div>
      <Scroll />
    </section>
  );
}

export default HostingSection;
