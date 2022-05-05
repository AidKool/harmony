import React, { useState } from 'react';
import './feed-section.css';
import Post from '../Post/Post';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';


function FeedSection() {
  const { data } = useQuery(GET_POSTS);
  const posts = data?.getAllPosts;

  console.log('posts data', posts);

  
  
  
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
             //  musicianId={post.accountId.musicianId._id}
             //  bandId={post.accountId.bandId._id}
           />
         );
        })}
      </div>
    </section>
  );
}

export default FeedSection;
