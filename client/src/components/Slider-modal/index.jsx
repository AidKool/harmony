import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import './slider-modal.css';

function sliderModal(props) {
  return (
    <article className="slider-modal">
      <div className="slider-modal-container">
        <img className="slider-modal-image" src={props.image} alt="" />
        <img className="small-modal-image" src={props.image} alt="" />
        <div className="modal-content-container">
          <div className="modal-list-container">
            <div className="modal-title-container">
              <h2 className="modal-title">{props.eventName}</h2>
              <FontAwesomeIcon onClick={props.onButtonClose} className="modal-x-button" icon={faXmarkCircle} />
            </div>
            <div className="subtitle-container">
              <h3 className="modal-list-title top-list-element-modal">Location</h3>
              <h4 className="modal-list-subtitle">{props.location}</h4>
            </div>
            <div className="subtitle-container">
              <h3 className="modal-list-title">Date</h3>
              <h4 className="modal-list-subtitle">{props.date}</h4>
            </div>
            <div className="subtitle-container">
              <h3 className="modal-list-title modal-list-title-bottom">Price: {props.price}</h3>
            </div>
          </div>
          <p className="modal-event-content">{props.info}</p>
          <a target="_blank" onClick={props.onButtonClose} className="modal-button" href={props.checkoutLink}>
            Purchase
          </a>
        </div>
      </div>
    </article>
  );
}

export default sliderModal;
