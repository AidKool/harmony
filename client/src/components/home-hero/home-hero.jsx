import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import './home-hero.css';
import GoldCrownLogo from './assets/Gold-crown'
import SilverCrownLogo from './assets/Silver-Crown';
import CopperCrownLogo from './assets/Copper-crown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';



let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

// ----------------------------------------------------------------------

function HomeHero() {
  const [activeSubModal, setActiveSubModal] = useState(null);

  const goldCrown = {
    price: 'price_1KtvV3IqutbJIdP9EYgtzYxw',
    quantity: 1,
  };
  const checkoutOptionsGold = {
    lineItems: [goldCrown],
    mode: 'payment',
    successUrl: `${window.location.origin}/success/xA2b4A6xY3lTgBKUyxV5jnttpZU1ka`,
    cancelUrl: `${window.location.origin}/`,
  };

  const redirectToCheckoutGold = async () => {
    const stripe = await getStripe();
    await stripe.redirectToCheckout(checkoutOptionsGold);
  };

  // -------------------------------------------------------------// =============================================================================

  const silverCrown = {
    price: 'price_1KujDGIqutbJIdP9rDAIsJEa',
    quantity: 1,
  };
  const checkoutOptionsSilver = {
    lineItems: [silverCrown],
    mode: 'payment',
    successUrl: `${window.location.origin}/success/silver`,
    cancelUrl: `${window.location.origin}/`,
  };

  const redirectToCheckoutSilver = async () => {
    const stripe = await getStripe();
    await stripe.redirectToCheckout(checkoutOptionsSilver);
  };
  // =============================================================================

  const copperCrown = {
    price: 'price_1KujjMIqutbJIdP9436t645S',
    quantity: 1,
  };
  const checkoutOptionsCopper = {
    lineItems: [copperCrown],
    mode: 'payment',
    successUrl: `${window.location.origin}/success/bronze`,
    cancelUrl: `${window.location.origin}/`,
  };

  const redirectToCheckoutCopper = async () => {
    const stripe = await getStripe();
    await stripe.redirectToCheckout(checkoutOptionsCopper);
  };

  // =============================================================================

  return (
    <section className="hero-section">
      <div className="home-cta-container">
        <p className="home-cta-title">Be rockstar and support us today!</p>
        <button className="home-cta-button" onClick={setActiveSubModal}>
          Donate
        </button>
      </div>
      <div className="hero-container">
        <p className="home-cta-title hero-title">Join fellow musicians to create the next big thing</p>
        <Link className="hero-button" to="/feed">
          Lets rock!
        </Link>
      </div>

      {activeSubModal && (
        <article className="subscription-modal">
          <div className="subscription-modal-container">
            <FontAwesomeIcon
              onClick={() => setActiveSubModal(null)}
              className="sub-modal-x-button"
              icon={faXmarkCircle}
            />

            <p className="sub-modal-title">
              Support us today <br /> and get a flashy <br /> profile badge
            </p>

            <div className="crown-container">
              <button onClick={redirectToCheckoutGold} className="sub-modal-donate-button gold-bc">
                Tier 1
              </button>
              <GoldCrownLogo />
            </div>
            <div className="crown-container">
              <button onClick={redirectToCheckoutSilver} className="sub-modal-donate-button silver-bc">
                Tier 2
              </button>
              <SilverCrownLogo />
            </div>
            <div className="crown-container ccpb">
              <button onClick={redirectToCheckoutCopper} className="sub-modal-donate-button copper-bc">
                Tier 3
              </button>
              <CopperCrownLogo />
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default HomeHero;
