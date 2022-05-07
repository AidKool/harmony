import React from 'react';

import MyPostsFeed from '../../components/MyPostsFeed';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

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
