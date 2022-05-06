import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../logo/logo';
import Burger from '../burger/burger';
import Cross from '../cross/cross';
import HLogo from '../h-logo/h-logo';
import Auth from '../../utils/auth';

import './nav.css';
function Nav() {
  const [toggle, setToggle] = useState(false);
  const locationRef = useRef(null);
  const navigate = useNavigate();

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
    locationRef.current.value = '';
    navigate('/search', { state: { location }, replace: false });
  }

  if (Auth.loggedIn()) {
    console.log('user is logged in');

    const userToken = localStorage.getItem('id_token');
    const jwtToken = JSON.parse(atob(userToken.split('.')[1]));
    const jwtId = jwtToken.data._id;

    const profilePath = `/profiles/${jwtId}`;

    return (
      <nav className="nav-bar">
        <div className={header}>
          <Link className="logo-link-con" to="/">
            <div className="logo-container">
              <Logo />
            </div>
          </Link>
          <Link className="logo-link-con-h" to="/">
            <div className="h-logo-container">
              <HLogo />
            </div>
          </Link>
          <form className="nav-form" onSubmit={handleFormSubmit}>
            <input type="search" ref={locationRef} placeholder="Search in a location" className="nav-search-field" />
            <button type="submit" className="nav-search-button">
              <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />
            </button>
          </form>
          <div className="right-side-nav-container">
            <Link className="add-post-nav-btn" to="/add-post">
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
              <Link to="/feed">
                <li className="nav-menu-li">Feed</li>
              </Link>
              <Link to="/feed">
                <li className="nav-menu-li">Messages</li>
              </Link>
              <Link to={profilePath}>
                <li className="nav-menu-li">My Account</li>
              </Link>
              <Link to="/my-posts">
                <li className="nav-menu-li">My posts</li>
              </Link>
              <a target="_blank" href="https://github.com/AidKool/harmony">
                <li className="nav-menu-li">Contact</li>
              </a>
            </ul>
            <button className="bn54 bnred" onClick={Auth.logout}>
              <span className="bn54span">Log out</span>
            </button>
            <div className="nav-border"></div>
          </div>
        </section>
      </nav>
    );
  } else {
    return (
      <nav className="nav-bar">
        <div className={header}>
          <Link className="logo-link-con" to="/">
            <div className="logo-container">
              <Logo />
            </div>
          </Link>
          <Link to="/">
            <div className="h-logo-container">
              <HLogo />
            </div>
          </Link>
          <div className="right-side-nav-container">
            <div onClick={menuHandler} className="hamburger-container">
              {toggle ? <Cross /> : <Burger />}
            </div>
          </div>
        </div>
        <section className={toggle ? 'mobileNavMenu-open' : 'mobileNavMenu-closed'}>
          <div className={backer}>
            <h2 className="nav-menu-title">Menu</h2>
            <ul className="nav-menu-content-links">
              <Link to="/signup">
                <li className="nav-menu-li">Sign up</li>
              </Link>
              <a target="_blank" href="https://github.com/AidKool/harmony">
                <li className="nav-menu-li">Contact</li>
              </a>
            </ul>
            <button className="bn54">
              <Link className="bn54" to="/login">
                <span className="bn54span">Login</span>
              </Link>
            </button>
            <div className="nav-border"></div>
          </div>
        </section>
      </nav>
    );
  }
}

export default Nav;
