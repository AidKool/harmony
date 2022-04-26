import React, { useState } from 'react';
import './login.css';
import backgroundImage from './assets/gig-background-pic.jpg';

function Login() {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

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
        </section>
      </div>
    </>
  );
}

export default Login;
