import React, { useState } from 'react';
import Logo from '../logo/logo'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Burger from '../burger/burger';
import Cross from '../cross/cross';



function Nav() {

  const [toggle, setToggle] = useState(false);

  const menuHandler = () => {
    setToggle(!toggle);
  };

    
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo-container">
          <Logo />
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
        <div className='test'>

        </div>

      </section>
    </nav>
  );
}

export default Nav