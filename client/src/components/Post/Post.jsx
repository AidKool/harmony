import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Post(props) {
  const userId = props.userId;
  const userLink = `/profiles/${userId}`;

  return (
    <article className="post-container">
      <section className="post-container-section-left">
        <h2 className="post-title">{props.title}</h2>
        <div className="post-content-container">
          <p className="post-content">{props.content}</p>
        </div>
        <div className="card-bottom-section">
          <div className="card-author-container">
            <img className="card-author-img" src={props.userImg} alt="" />
            <h3 className="card-author-name">{props.user}</h3>
          </div>
          <h3 className="post-date">{props.createdAt}</h3>
          <div className="post-badge-container">
            <div className="band-badge">Band</div>
            <div className="music-badge">Musician</div>
            <div className="Donor-badge">
              <span className="post-link-text">Donor</span>
              <FontAwesomeIcon className="post-user-icon" icon={faCrown} />
            </div>
            <Link className="post-profile-link" to={userLink}>
              <span className="post-link-text">Profile</span>
              <FontAwesomeIcon className="post-user-icon" icon={faUser} />
            </Link>
          </div>
        </div>
      </section>
      <img className="post-img" src={props.picture} alt="" />
    </article>
  );
}

export default Post;
