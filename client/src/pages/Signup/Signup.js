import { useState, useEffect } from 'react';
import './signup.css';
import backgroundImage from '../Login/assets/gig-background-pic.jpg';

function Signup() {
  const initialValues = { username: '', email: '', password: '', confirmPassword: '', type: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
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
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    } else if (values.password !== values.confirmPassword) {
      errors.password = 'Passwords do not match';
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('correct', formValues);
    }
  }, [formErrors]);

  return (
    <>
      <img src={backgroundImage} className="background-image"></img>
      <div className="container">
        <section className="login-form">
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="err">{formErrors.username}</p>
            <input type="text" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
            <p className="err">{formErrors.email}</p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="err">{formErrors.password}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <p className="err">{formErrors.password}</p>
            <select name="type" className="type" value={formValues.type} onChange={handleChange}>
              <option value="Band">Band</option>
              <option value="Musician">Musician</option>
            </select>
            <p className="err">{formErrors.type}</p>

            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Signup
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signup;
