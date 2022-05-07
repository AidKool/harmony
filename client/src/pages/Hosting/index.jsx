import React from 'react';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import HostingSection from '../../components/Hosting-section';
import ScrollDuoSection from '../../components/Scroll-Duo-Section';
import HostingBanner from '../../components/Hosting-banner';

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

export default Hosting;
