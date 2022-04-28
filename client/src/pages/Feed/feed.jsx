import React from 'react';
import './feed.css';
import FeedSection from '../../components/Feed-section/Feed-section';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';

function Feed() {
  return (
    <div>
      <Nav />
      <FeedSection />
      <Footer />
    </div>
  );
}

export default Feed
