import React from 'react';
import { useQuery } from '@apollo/client';

import Post from '../Post';

import { GET_POSTS } from '../../utils/queries';

import './feed-section.css';

function FeedSection() {
  const { data } = useQuery(GET_POSTS);
  const posts = data?.getAllPosts;

  return (
    <section className="feed-section-container">
      <div className="feed-section-component-container">
        {posts?.map((post) => {
          return (
            <Post
              title={post.title}
              key={post.title}
              content={post.content}
              picture={post.picture}
              createdAt={post.createdAt}
              user={post.accountId.username}
              userImg={post.accountId.picture}
              userId={post.accountId._id}
              donated={post.accountId.donated}
              silver={post.accountId.silver}
              bronze={post.accountId.bronze}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeedSection;
