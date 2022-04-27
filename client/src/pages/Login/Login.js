import React, { useState } from 'react';
import './login.css';
import backgroundImage from './assets/gig-background-pic.jpg';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';

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

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <img src={backgroundImage} className="background-image"></img>
      <div className="container">
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
          {error && <div className="error-message">{error.message}</div>}
        </section>
      </div>
    </>
  );
}

export default Login;
