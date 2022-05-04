import React, {useEffect} from 'react'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/Footer'
import SuccessFeedback from '../../components/success-feedback/success-feedback';
import { useMutation } from '@apollo/client';
import { SET_DONATED_SILVER } from '../../utils/mutations';

function SuccessSilver() {

  const [donateSilverFunction, { data, loading, error }] = useMutation(SET_DONATED_SILVER);
  
  
  useEffect(() => {
    console.log("success!");
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

export default SuccessSilver