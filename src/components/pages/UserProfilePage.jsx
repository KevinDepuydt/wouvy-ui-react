import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import { withAuthContext } from '../../contexts/AuthContext';
import userService from '../../services/user';
import Form from '../ui/Form';
import Button from '../ui/Button';
import Page from '../ui/Page';
import Image from '../ui/Image';

const ProfileForm = styled(Form)`
  max-width: 32rem;
  margin: 0;
`;

const UserPicture = styled(Image)`
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
  margin: 1.875rem 2.2rem 0 0;
`;

const PaddedFlexBox = styled(Page.FlexBox)`
  padding: 0 1rem;
`;

class UserProfilePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    authenticate: PropTypes.func.isRequired,
  };

  async handleProfileSubmit(values, { setSubmitting }) {
    console.log('UserProfilePage.handleProfileSubmit', values);
    try {
      const updatedUser = Object.assign(this.props.user, values);
      const { message, token } = await userService.update(updatedUser);
      console.log('UserProfilePage.handleProfileSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('UserProfilePage.handleProfileSubmit: error', e);
    }
    setSubmitting(false);
  }

  async handlePasswordSubmit(values, { setSubmitting }) {
    console.log('UserProfilePage.handlePasswordSubmit', values);
    try {
      const { message, token } = await userService.updatePassword(this.props.user._id, values);
      console.log('UserProfilePage.handlePasswordSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('UserProfilePage.handlePasswordSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    const { email, firstname, lastname, username, avatar, picture } = this.props.user;
    return (
      <Page>
        <Page.FlexRow>
          <Page.Box>
            <UserPicture src={picture} errSrc={avatar} alt="user profile" />
          </Page.Box>
          <PaddedFlexBox>
            <Page.Title>Mon profil</Page.Title>
            <Formik
              initialValues={{ email, firstname, lastname, username }}
              onSubmit={this.handleProfileSubmit.bind(this)}
            >
              {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                <ProfileForm onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Input
                      id="email"
                      type="text"
                      name="email"
                      value={values.email}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="lastname">Nom</Form.Label>
                    <Form.Input
                      id="lastname"
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      value={values.lastname}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="firstname">Prénom</Form.Label>
                    <Form.Input
                      id="firstname"
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      value={values.firstname}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
                    <Form.Input
                      id="username"
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                    />
                  </Form.Group>
                  <Form.Actions align="left">
                    <Button type="submit" disabled={isSubmitting}>Mettre à jour</Button>
                  </Form.Actions>
                </ProfileForm>
              )}
            </Formik>
          </PaddedFlexBox>
          <PaddedFlexBox>
            <Page.Title>Changer le mot de passe</Page.Title>
            <Formik
              initialValues={{ password: '', confirmation: '' }}
              validate={values => {
                let errors = {};

                if (!values.password) {
                  errors.password = 'Veuillez renseigner le nouveau mot de passe';
                } else if (!values.confirmation) {
                  errors.confirmation = 'Veuillez renseigner le nouveau mot de passe';
                } else if (values.password !== values.confirmation) {
                  errors.confirmation = 'Les mots de passe ne correspondent pas';
                }

                return errors;
              }}
              onSubmit={this.handlePasswordSubmit.bind(this)}
              validateOnBlur={false}
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                <ProfileForm onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="password">Nouveau mot de passe</Form.Label>
                    <Form.Input
                      id="password"
                      type="password"
                      name="password"
                      onChange={handleChange}
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
                      value={values.confirmation}
                    />
                    <Form.Error>{errors.confirmation && touched.confirmation && errors.confirmation}</Form.Error>
                  </Form.Group>
                  <Form.Actions align="left">
                    <Button type="submit" disabled={isSubmitting}>Valider</Button>
                  </Form.Actions>
                </ProfileForm>
              )}
            </Formik>
          </PaddedFlexBox>
        </Page.FlexRow>
      </Page>
    );
  }
}

export default withAuthContext(UserProfilePage);
