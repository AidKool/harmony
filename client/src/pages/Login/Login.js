import React, { useState } from 'react';
import './login.css';
import backgroundImage from './assets/gig-background-pic.jpg';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Logo from '../../components/logo/logo';

import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Login() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState('');
  const [login, { error, data }] = useMutation(LOGIN);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    console.log('error', error);
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      setFormError('Invalid Credentials');
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <img src={backgroundImage} className="background-image" alt="background"></img>
      <Link href="/signup" className="signup-link signup-btn">
        SIGN-UP
      </Link>
      <div className="container">
        <div className="logo-container-login ">
          <Logo />
        </div>
        <section className="login-form">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="login-input"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
            />

            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </section>
        {formError ? (
          <div>
            <p className="error-text">Invalid Credentials</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Login;
