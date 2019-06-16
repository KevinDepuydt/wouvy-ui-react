import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';
import { withAuthContext } from '../../contexts/AuthContext';
import { Page } from '../ui';
import SignupForm from '../forms/SignupForm';

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  text-align: center;
  margin-bottom: 1.875rem;
`;

class Signup extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  async handleSubmit(values, { setSubmitting }) {
    console.log('Signup.handleSubmit', values);
    try {
      const { message, token } = await AuthService.signup(values);
      console.log('Signup.handleSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('Signup.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    console.log('Signup.render');
    return (
      <Page.FlexContent direction="column" align="center" justify="center">
        <Title>Inscription</Title>
        <SignupForm onSubmit={this.handleSubmit.bind(this)} />
        <p>Déjà inscrit ? <Link to="/auth/signin" className="link">Connectez</Link> vous !</p>
      </Page.FlexContent>
    );
  }
}

export default withAuthContext(Signup);
