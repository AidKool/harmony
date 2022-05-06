import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import GoldLogo from '../../components/home-hero/assets/Gold-crown'
import SilverLogo from '../../components/home-hero/assets/Silver-Crown';
import BronzeLogo from '../../components/home-hero/assets/Copper-crown';


function  Post(props) {
  const userId = props.userId;
  const userLink = `/profiles/${userId}`;

  const donated = props.donated;
  const silver = props.silver
  const bronze = props.bronze;


  

  return (
    <article className="post-container">
      <section className="post-container-section-left">
        <h2 className="post-title">{props.title}</h2>
        <div className="post-content-container">
          <p className="post-content">{props.content}</p>
        </div>
        <div className="card-bottom-section">
          <div className="card-author-container">
            {props.userImg === null ? <img className="card-author-img" src="https://i.imgur.com/ZOgaykp.png" alt="" /> : <img className="card-author-img" src={props.userImg} alt="" />}
            <h3 className="card-author-name">{props.user}</h3>
          </div>
          <div className="post-badge-container">
            <Link className="post-profile-link" to={userLink}>
              <span className="post-link-text">Profile</span>
              <FontAwesomeIcon className="post-user-icon" icon={faUser} />
            </Link>
            {/* <div className="band-badge">Band</div>
            <div className="music-badge">Musician</div> */}

            {donated === true ? (
              <div className="crown-container-post">
                <GoldLogo />
              </div>
            ) : (
              ''
            )}

            {silver === true ? (
              <div className="crown-container-post">
                <SilverLogo />
              </div>
            ) : (
              ''
            )}

            {bronze === true ? (
              <div className="crown-container-post">
                <BronzeLogo />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <h3 className="post-date">{props.createdAt}</h3>
      </section>
      <img className="post-img" src={props.picture} alt="" />
    </article>
  );
}

export default Post;
