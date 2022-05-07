import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SuccessFeedback from '../../components/Success-feedback';
import { SET_DONATED_SILVER } from '../../utils/mutations';

function SuccessSilver() {
  const [donateSilverFunction, { data, loading, error }] = useMutation(SET_DONATED_SILVER);

  useEffect(() => {
    console.log('success!');
    donateSilverFunction();
  }, []);

  return (
    <section className="success-page-container">
      <Nav />
      <SuccessFeedback />
      <Footer />
    </section>
  );
}

export default SuccessSilver;
