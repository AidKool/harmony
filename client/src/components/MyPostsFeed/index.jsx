import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import IndividualUserPost from '../IndividualUserPost';
import { GET_MY_POSTS } from '../../utils/queries';

import './myPostsFeed.css';

function MyPostsFeed() {
  const { data, refetch } = useQuery(GET_MY_POSTS);
  const myPosts = data?.getMyPosts;

  return (
    <section className="feed-section-container">
      <div className="feed-section-component-container">
        <h1 className="my-posts-h1">MY POSTS</h1>
        {myPosts?.map((post) => {
          return (
            <IndividualUserPost
              onDeleteSucess={refetch}
              title={post.title}
              key={post.title}
              id={post._id}
              content={post.content}
              picture={post.picture}
              createdAt={post.createdAt}
              userId={post.accountId._id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MyPostsFeed;
