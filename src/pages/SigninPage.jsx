import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthService from '../services/auth';
import { withAuthContext } from '../contexts/AuthContext';
import SocialAuthBanner from '../components/SocialAuthBanner';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

class SigninPage extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  async handleSubmit(values, { setSubmitting }) {
    console.log('SigninPage.handleSubmit', values);
    try {
      const { message, token } = await AuthService.signin(values);
      console.log('SigninPage.handleSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('SigninPage.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    console.log('SigninPage.render');
    return (
      <div>
        <p>Sign in</p>
        <Link to="/">Home</Link>
        <Link to="/signup">Register</Link>
        <SocialAuthBanner />
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!EMAIL_REGEX.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={this.handleSubmit.bind(this)}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuthContext(SigninPage);
