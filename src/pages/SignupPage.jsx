import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthService from '../services/auth';
import { withAuthContext } from '../contexts/AuthContext';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

class SignupPage extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  async handleSubmit(values, { setSubmitting }) {
    console.log('SignupPage.handleSubmit', values);
    try {
      const { message, token } = await AuthService.signup(values);
      console.log('SignupPage.handleSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('SignupPage.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    console.log('SignupPage.render');
    return (
      <div>
        <p>Sign up</p>
        <Link to="/">Home</Link>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email required';
            } else if (!EMAIL_REGEX.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Password required';
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
              /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <input
                  id="password"
                  key="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div>
                {errors.password && touched.password && errors.password}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Signup
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withAuthContext(SignupPage);
