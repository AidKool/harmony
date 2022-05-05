import React, { useState, useEffect } from 'react';
import './myPostsFeed.css';
import IndividualUserPost from '../IndividualUserPost/IndividualUserPost';
import { useQuery } from '@apollo/client';
import { GET_MY_POSTS } from '../../utils/queries';

function MyPostsFeed() {
  const { data } = useQuery(GET_MY_POSTS);
  // const myPosts = data?.getMyPosts;
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    console.log(data);
    async function getData() {
      if (data) {
        setMyPosts(data.getMyPosts);
      }
    }
    getData();
  }, [data, setMyPosts]);

  console.log('my posts data', myPosts);

  return (
    <section className="feed-section-container">
      <div className="feed-section-component-container">
        <h1 className="my-posts-h1">MY POSTS</h1>
        {myPosts?.map((post) => {
          return (
            <IndividualUserPost
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
