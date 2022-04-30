import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

function homeHero() {
  const item = {
    price: 'price_1KtvV3IqutbJIdP9EYgtzYxw',
    quantity: 1,
  };

  

  const checkoutOptions = {
    lineItems: [item],
    mode: 'payment',
    successUrl: `${window.location.origin}/success/xA2b4A6xY3lTgBKUyxV5jnttpZU1ka`,
    cancelUrl: `${window.location.origin}/`,
  };

  const redirectToCheckout = async () => {
    const stripe = await getStripe();
    await stripe.redirectToCheckout(checkoutOptions);

  };

  return (
    <section className="hero-section">
      <div className="home-cta-container">
        <p className="home-cta-title">Become a rockstar and support us today</p>
        <button onClick={redirectToCheckout} className="home-cta-button" to="/feed">
          Donate
        </button>
      </div>
      <div className="hero-container">
        <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
        <Link className="hero-button" to="/feed">
          Lets rock!
        </Link>
      </div>
    </section>
  );
}

export default homeHero;
