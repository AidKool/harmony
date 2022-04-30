import React, {useEffect} from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer'
import SuccessFeedback from '../../components/success-feedback/success-feedback';
import { useMutation } from '@apollo/client';
import { SET_DONATED_TRUE } from '../../utils/mutations'

function Success() {

  const [donateFunction, { data, loading, error }] = useMutation(SET_DONATED_TRUE);
  
  
  useEffect(() => {
    console.log("success!");
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

export default Success