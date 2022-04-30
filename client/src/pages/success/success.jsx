import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer'
import SuccessFeedback from '../../components/success-feedback/success-feedback';

function Success() {
  return (
    <section className="success-page-container">
      <Nav />
      <SuccessFeedback />
      <Footer />
    </section>
  );
}

export default Success