import React, { useState, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo';
import Burger from '../burger/burger';
import Cross from '../cross/cross';
import HLogo from '../h-logo/h-logo';
import { QUERY_ACOUNTS_BY_DISTANCE } from '../../utils/queries';

import './nav.css';

function Nav() {
  const [toggle, setToggle] = useState(false);
  const locationRef = useRef(null);
  const [search, { loading, error, data }] = useLazyQuery(QUERY_ACOUNTS_BY_DISTANCE);

  const menuHandler = () => {
    setToggle(!toggle);
  };

  const numberSlide = 1150;

  const [header, setHeader] = useState('header');

  const listenScrollEvent = (event) => {
    if (window.scrollY < numberSlide) {
      return setHeader('header');
    } else {
      return setHeader('header2');
    }
  };

  const [backer, setBacker] = useState('backer');

  const listenScrollEventTwo = (event) => {
    if (window.scrollY < numberSlide) {
      return setBacker('backer');
    } else {
      return setBacker('backer2');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEventTwo);

    return () => window.removeEventListener('scroll', listenScrollEventTwo);
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    const location = locationRef.current.value.trim().toLowerCase();
    const miles = 100;
    search({ variables: { location, miles } });
    if (data) {
      console.log(data);
    }
  }

  return (
    <nav className="nav-bar">
      <div className={header}>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="h-logo-container">
          <HLogo />
        </div>

        <form className="nav-form" onSubmit={handleFormSubmit}>
          <input type="search" ref={locationRef} placeholder="Search in a location" className="nav-search-field" />
          <button type="submit" className="nav-search-button">
            <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />
          </button>
        </form>

        <div className="right-side-nav-container">
          <Link className="add-post-nav-btn" to="/">
            <span className="add-post-span">Add post</span>
            <FontAwesomeIcon className="nav-search-icon" icon={faPlus} />
          </Link>

          <div onClick={menuHandler} className="hamburger-container">
            {toggle ? <Cross /> : <Burger />}
          </div>
        </div>
      </div>

      <section className={toggle ? 'mobileNavMenu-open' : 'mobileNavMenu-closed'}>
        <div className={backer}>
          <h2 className="nav-menu-title">Menu</h2>
          <ul className="nav-menu-content-links">
            <li className="nav-menu-li">My Feed</li>
            <li className="nav-menu-li">My Account</li>
            <li className="nav-menu-li">Contact</li>
          </ul>
          <button className="bn54">
            <span className="bn54span">Login</span>
          </button>
          <div className="nav-border"></div>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
