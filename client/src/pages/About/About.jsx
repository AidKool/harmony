import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer';
import AboutSection from '../../components/about-section/About-section';
import './about.css'


function About() {
  return (
      <section className='about-page-container'>
          <Nav/>
          <AboutSection/>
          <Footer/>


      </section>
  )
}

export default About