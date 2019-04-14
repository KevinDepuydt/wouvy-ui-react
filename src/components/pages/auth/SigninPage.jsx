import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthService from '../../../services/auth';
import { withAuthContext } from '../../../contexts/AuthContext';
import { Page, Form, Button } from '../../ui';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  text-align: center;
  margin-bottom: 1.875rem;
`;

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
      <Page.FlexContent direction="column" align="center" justify="center">
        <Title>Connexion</Title>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};

            if (!values.email) {
              errors.email = 'Veuillez renseigner votre email';
            } else if (!EMAIL_REGEX.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Veuillez renseigner votre mot de passe';
            }

            return errors;
          }}
          onSubmit={this.handleSubmit.bind(this)}
          validateOnBlur={false}
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
            <Form width={300} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Form.Error>{errors.email && touched.email && errors.email}</Form.Error>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Mot de passe</Form.Label>
                <Form.Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Form.Error>{errors.password && touched.password && errors.password}</Form.Error>
              </Form.Group>
              <Form.Actions>
                <Button type="submit" disabled={isSubmitting}>Go</Button>
              </Form.Actions>
            </Form>
          )}
        </Formik>
        <p>Nouveau parmi nous ? <Link to="/auth/signup">Inscrivez</Link> vous !</p>
        <Link to="/auth/forgot-password">Mot de passe oublié ?</Link>
      </Page.FlexContent>
    );
  }
}

export default withAuthContext(SigninPage);
