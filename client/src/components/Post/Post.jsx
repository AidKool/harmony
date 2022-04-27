import React from 'react'
import './post.css'

function Post() {
  return (
    <article className="post-container">
      <section className="post-container-section-left">
        <h2 className="post-title">Hello I am a post</h2>
        <p className="post-content">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>

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
          <a className='post-profile-link' href="/">View Profile</a>
        </div>
      </section>

      <div className="post-img-container-right">
        <img
          className="post-img"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/darth-vader-1549906397.jpg"
          alt=""
        />
      </div>
    </article>
  );
}

export default Post