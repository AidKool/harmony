import React, { useState } from 'react';
import Logo from '../logo/logo'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Burger from '../burger/burger';
import Cross from '../cross/cross';
import HLogo from '../h-logo/h-logo';
import { Link } from 'react-router-dom';




function Nav() {

  const [toggle, setToggle] = useState(false);

  const menuHandler = () => {
    setToggle(!toggle);
  };

    
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo-container">
          <Link className='logo-link' to="/">
            <Logo />
          </Link>
        </div>
        <div className="h-logo-container">
          <HLogo />
        </div>

        <form action="/" method="GET" class="nav-form">
          <input type="search" placeholder="Search" class="nav-search-field" />
          <button type="submit" class="nav-search-button">
            <FontAwesomeIcon className="nav-search-icon" icon={faSearch} />
          </button>
        </form>

        <div onClick={menuHandler} className="hamburger-container">
          {toggle ? <Cross /> : <Burger />}
        </div>
      </div>

      <section className={toggle ? 'mobileNavMenu-open' : 'mobileNavMenu-closed'}>
        <div className="nav-menu-content-container">
          <h2 className="nav-menu-title">Menu</h2>
          <ul className="nav-menu-content-links">
            <li className="nav-menu-li">My Feed</li>
            <li className="nav-menu-li">My Account</li>
            <li className="nav-menu-li">Contact</li>
          </ul>
          <button className="bn54">
            <span className="bn54span">Login</span>
          </button>
        </div>
        <div className="nav-border"></div>
      </section>
    </nav>
  );
}

export default Nav