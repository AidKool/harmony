import React from 'react'
import './feed-section.css'
import Post from '../Post/Post';

function FeedSection() {
  return <section className='feed-section-container'>
    <div className='feed-section-component-container'>
    <Post/>
    </div>
  </section>;
}

export default FeedSection;