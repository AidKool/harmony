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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

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

  return (
    <>
      <img src={backgroundImage} className="background-image"></img>
      <a href="/signup" className="signup-link">
        <button className="signup-btn">SIGNUP</button>
      </a>
      <div className="container">
        <div className="logo-container">
          <Logo />
        </div>
        <section className="login-form">
          <form>
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
            <button type="button" className="submit-btn" onClick={handleFormSubmit}>
              Login
            </button>
          </form>
          {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
        </section>
      </div>
    </>
  );
}

export default Login;
