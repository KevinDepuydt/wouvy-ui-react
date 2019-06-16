import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik/dist/index';
import { Button, Form } from '../ui';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default class SigninForm extends React.Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
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
        onSubmit={this.props.onSubmit}
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
    );
  }
}