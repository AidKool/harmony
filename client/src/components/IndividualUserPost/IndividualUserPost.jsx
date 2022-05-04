import React from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import './IndividualUserPost.css';
import { Link } from 'react-router-dom';
import { DELETE_POST } from '../../utils/mutations';

function IndividualUserPost(props) {
  const postId = props.id;
  const updateLink = `/update-post/${postId}`;
  const [deletePost, { error, data }] = useMutation(DELETE_POST);

  return (
    <article className="post-container">
      <section className="post-container-section-left">
        <h2 className="post-title">{props.title}</h2>
        <div className="post-content-container">
          <p className="post-content">{props.content}</p>
        </div>
        <div className="card-bottom-section">
          <div className="post-badge-container">
            <Link className="post-update" to={updateLink}>
              <span className="post-link-text">UPDATE</span>
            </Link>
            <button
              className="post-delete"
              onClick={() => {
                deletePost({ variables: { postId: postId } });
              }}>
              <span className="post-link-text">DELETE</span>
            </button>
          </div>
        </div>
        <h3 className="post-date">{props.createdAt}</h3>
      </section>
      <img className="post-img" src={props.picture} alt="" />
    </article>
  );
}

export default IndividualUserPost;
