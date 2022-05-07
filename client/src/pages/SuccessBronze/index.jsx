import React, {useEffect} from 'react'
import { useMutation } from '@apollo/client';

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SuccessFeedback from '../../components/Success-feedback';
import { SET_DONATED_BRONZE } from '../../utils/mutations';

function SuccessBronze() {

  const [donateBronzeFunction, { data, loading, error }] = useMutation(SET_DONATED_BRONZE);
  
  
  useEffect(() => {
    console.log("success!");
    donateBronzeFunction();
  }, []);
  


  return (
    <section className="success-page-container">
      <Nav />
      <SuccessFeedback />
      <Footer />
    </section>
  );
}

export default SuccessBronze;