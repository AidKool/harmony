import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Post() {
  return (
    <article className="post-container">
      <section className="post-container-section-left">
        <h2 className="post-title">Hello I am a post</h2>
        <div className="post-content-container">
          <p className="post-content">
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor 
          </p>
        </div>

        <div className="card-bottom-section">
          <div className="card-author-container">
            <img
              className="card-author-img"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/darth-vader-1549906397.jpg"
              alt=""
            />
            <h3 className="card-author-name">Alistair Houghton</h3>
          </div>
          <h3 className="post-date">Created at 01/01/2022</h3>
          <a className="post-profile-link" href="/">
            <span className="post-link-text">Profile</span> <FontAwesomeIcon className="post-user-icon" icon={faUser} />
          </a>
        </div>
      </section>

      <img
        className="post-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/darth-vader-1549906397.jpg"
        alt=""
      />
    </article>
  );
}

export default Post;
