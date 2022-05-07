import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ACCOUNT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Logo from '../../components/Logo';

import backgroundImage from '../Login/assets/gig-background-pic.jpg';
import './signup.css';

function Signup() {
  const initialValues = { username: '', email: '', password: '', type: 'Band' };
  const [formValues, setFormValues] = useState(initialValues);
  const [confirmPassword, setConfirmPassword] = useState({ confirmPass: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [addAccount, { error, data }] = useMutation(ADD_ACCOUNT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setConfirmPassword({ ...confirmPassword, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues, confirmPassword));
    setIsSubmit(true);
  };

  const validate = (values, confirmPassword) => {
    console.log(values, confirmPassword);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be more than 6 characters';
    } else if (values.password !== confirmPassword.confirmPass) {
      errors.password = 'Passwords do not match';
    }
    return errors;
  };

  useEffect(() => {
    console.log('form errors', formErrors, formValues, confirmPassword);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('all good', formValues);
      signUserUp();
    }
  }, [formErrors]);

  const signUserUp = async () => {
    try {
      const { data } = await addAccount({
        variables: { ...formValues },
      });
      console.log(data);
      Auth.login(data.addAccount.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <img src={backgroundImage} className="background-image" alt="background"></img>
      <Link to="/login" className="signup-link signup-btn">
        LOGIN
      </Link>
      <div className="container">
        <div className="logo-container-login ">
          <Logo />
        </div>
        <section className="signup-form">
          <form>
            <input
              type="text"
              className="signup-input"
              placeholder="Username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="err">{formErrors.username}</p>
            <input
              type="text"
              className="signup-input"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="err">{formErrors.email}</p>
            <input
              type="password"
              className="signup-input"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="err">{formErrors.password}</p>
            <input
              type="password"
              className="signup-input"
              placeholder="Confirm Password"
              name="confirmPass"
              value={confirmPassword.value}
              onChange={handleChange}
            />
            <p className="err">{formErrors.password}</p>
            <select name="type" className="type" value={formValues.type} onChange={handleChange}>
              <option disabled>Are you a band or musician?</option>
              <option value="Band">Band</option>
              <option value="Musician">Musician</option>
            </select>
            <p className="err">{formErrors.type}</p>

            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Signup
            </button>
          </form>
          {error && <p className="error-msg">{error.message}</p>}
        </section>
      </div>
    </>
  );
}

export default Signup;
