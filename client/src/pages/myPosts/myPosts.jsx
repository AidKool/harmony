import React from 'react';
import MyPostsFeed from '../../components/myPostsFeed/myPostsFeed';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';

function MyPosts() {
  return (
    <div>
      <Nav />
      <MyPostsFeed />
      <Footer />
    </div>
  );
}

export default MyPosts;
