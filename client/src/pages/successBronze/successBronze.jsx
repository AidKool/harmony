import React, {useEffect} from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer'
import SuccessFeedback from '../../components/success-feedback/success-feedback';
import { useMutation } from '@apollo/client';
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