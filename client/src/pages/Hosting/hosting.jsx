import React from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer';
import HostingSection from '../../components/hosting-section/hosting-section';
import ScrollDuoSection from '../../components/Scroll-Duo-Section/scroll-duo-section';
import HostingBanner from '../../components/hosting-banner/hosting-banner';


function Hosting() {
  return (
    <section className="hosting-container">
      <Nav />
      <HostingSection />
      <HostingBanner />
      <ScrollDuoSection />

      <Footer />
    </section>
  );
}

export default Hosting