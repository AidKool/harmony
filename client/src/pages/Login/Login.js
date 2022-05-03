import React, { useState } from 'react';
import './login.css';
import backgroundImage from './assets/gig-background-pic.jpg';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Logo from '../../components/logo/logo';

import Auth from '../../utils/auth';

function Login() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    console.log(error);

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <>
      <img src={backgroundImage} className="background-image"></img>
      <a href="/signup" className="signup-link signup-btn">
        SIGN-UP
      </a>
      <div className="container">
        <div className="logo-container-login ">
          <Logo />
        </div>
        <section className="login-form">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
            />
            {error ? (
              <div>
                <p className="error-text">Invalid Credentials</p>
              </div>
            ) : null}
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
