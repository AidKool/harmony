import React from 'react'
import './success-feedback.css'
import { Link } from 'react-router-dom';

function successFeedback() {
  return (
    <section className="success-feedback-container">
      <article className="success-card">
        <h2 className='success-title'>Success!</h2>
        <p className='success-content'>You shiny badge is on your profile and posts. Enjoy!</p>
        <Link className='success-button' to="/">
          Next
        </Link>
      </article>
    </section>
  );
}

export default successFeedback