import React from 'react';
import './footer.css';
import Logo from '../../components/logo/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <section className="home-footer-container">
      <div className="footer-logo-container">
        <div className="nav-logo-container">
          <Logo />
        </div>
      </div>
      <div className="column-container">
        <div className="footer-col-1">
          <h3 className="footer-list-header">Company</h3>
          <ul className="footer-list">
            <a target="_blank" href="">
              <li className="footer-list-link">About</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Contact</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Help Center</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Our Covid-19 response</li>
            </a>
          </ul>
        </div>

        <div className="footer-col-2">
          <h3 className="footer-list-header">Communities</h3>
          <ul className="footer-list">
            <a target="_blank" href="">
              <li className="footer-list-link">About</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Contact</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Help Center</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Our Covid-19 response</li>
            </a>
          </ul>
        </div>

        <div className="footer-col-3">
          <h3 className="footer-list-header">Useful links</h3>
          <ul className="footer-list">
            <a target="_blank" href="">
              <li className="footer-list-link">About</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Contact</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Help Center</li>
            </a>
            <a target="_blank" href="">
              <li className="footer-list-link">Our Covid-19 response</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="social-container">
        <a target="_blank" href="">
          <FontAwesomeIcon className="footer-list-link icon-sizing" icon={faGithub} />
        </a>
        <a target="_blank" href="">
          <FontAwesomeIcon className="footer-list-link icon-sizing" icon={faLinkedinIn} />
        </a>
        <a target="_blank" href="">
          <FontAwesomeIcon className="footer-list-link icon-sizing" icon={faInstagram} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
