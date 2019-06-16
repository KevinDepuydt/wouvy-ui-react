import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik/dist/index';
import { Button, Form } from '../ui';

export default class WorkflowForm extends React.Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', description: '' }}
        validate={values => {
          let errors = {};

          if (!values.name) {
            errors.name = 'Veuillez renseigner le nom du workflow';
          }

          return errors;
        }}
        onSubmit={this.props.onSubmit.bind(this)}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="name">Nom du workflow</Form.Label>
              <Form.Input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <Form.Error>{errors.name && touched.name && errors.name}</Form.Error>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.TextArea
                id="description"
                type="text"
                name="description"
                onChange={handleChange}
                value={values.description}
              />
            </Form.Group>
            <Form.Actions align="left">
              <Button type="submit" disabled={isSubmitting}>Créer</Button>
            </Form.Actions>
          </Form>
        )}
      </Formik>
    );
  }
}
