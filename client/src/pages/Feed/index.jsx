import React from 'react';

import FeedSection from '../../components/Feed-section';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import './feed.css';

function Feed() {
  return (
    <div>
      <Nav />
      <FeedSection />
      <Footer />
    </div>
  );
}

export default Feed;
