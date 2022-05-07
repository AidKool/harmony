import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SuccessFeedback from '../../components/Success-feedback';

import { SET_DONATED_TRUE } from '../../utils/mutations';

function Success() {
  const [donateFunction, { data, loading, error }] = useMutation(SET_DONATED_TRUE);

  useEffect(() => {
    console.log('success!');
    donateFunction();
  }, []);

  return (
    <section className="success-page-container">
      <Nav />
      <SuccessFeedback />
      <Footer />
    </section>
  );
}

export default Success;
