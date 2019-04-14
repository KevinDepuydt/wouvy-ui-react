import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthService from '../../../services/auth';
import { withAuthContext } from '../../../contexts/AuthContext';
import { Page, Form, Button, Checkbox } from '../../ui';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  text-align: center;
  margin-bottom: 1.875rem;
`;

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
      <Page.FlexContent direction="column" align="center" justify="center">
        <Title>Inscription</Title>
        <Formik
          initialValues={{ email: '', password: '', confirmation: '', acceptCGUV: false }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Veuillez renseigner votre email';
            } else if (!EMAIL_REGEX.test(values.email)) {
              errors.email = "L'email renseigné n'est pas valide";
            }

            if (!values.password) {
              errors.password = 'Veuillez renseigner votre mot de passe';
            } else if (!values.confirmation) {
              errors.confirmation = 'Veuillez renseigner la confirmation du mot de passe';
            } else if (values.password !== values.confirmation) {
              errors.confirmation = 'Les mots de passe ne correspondent pas';
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
              setFieldValue,
              /* and other goodies */
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
              <Form.Group>
                <Form.Label htmlFor="confirmation">Vérification</Form.Label>
                <Form.Input
                  id="confirmation"
                  type="password"
                  name="confirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmation}
                />
                <Form.Error>{errors.confirmation && touched.confirmation && errors.confirmation}</Form.Error>
              </Form.Group>
              <Form.Group>
                <Checkbox
                  name="accept-cguv"
                  label="J'accepte les conditions d'utilisation"
                  checked={values.acceptCGUV}
                  onChange={() => setFieldValue('acceptCGUV', !values.acceptCGUV)}
                />
              </Form.Group>
              <Form.Actions>
                <Button type="submit" disabled={isSubmitting}>Go</Button>
              </Form.Actions>
            </Form>
          )}
        </Formik>
        <p>Déjà inscrit ? <Link to="/auth/signin" className="link">Connectez</Link> vous !</p>
      </Page.FlexContent>
    );
  }
}

export default withAuthContext(SignupPage);
