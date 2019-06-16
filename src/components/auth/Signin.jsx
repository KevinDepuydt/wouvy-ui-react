import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';
import { withAuthContext } from '../../contexts/AuthContext';
import { Page } from '../ui';
import SigninForm from '../forms/SigninForm';

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  text-align: center;
  margin-bottom: 1.875rem;
`;

class Signin extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  async handleSubmit(values, { setSubmitting }) {
    console.log('Signin.handleSubmit', values);
    try {
      const { message, token } = await AuthService.signin(values);
      console.log('Signin.handleSubmit: success', message, token);
      if (token) {
        this.props.authenticate(token);
      }
    } catch (e) {
      console.log('Signin.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    console.log('Signin.render');
    return (
      <Page.FlexContent direction="column" align="center" justify="center">
        <Title>Connexion</Title>
        <SigninForm onSubmit={this.handleSubmit.bind(this)} />
        <p>Nouveau parmi nous ? <Link to="/auth/signup">Inscrivez</Link> vous !</p>
        <Link to="/auth/forgot-password">Mot de passe oublié ?</Link>
      </Page.FlexContent>
    );
  }
}

export default withAuthContext(Signin);
