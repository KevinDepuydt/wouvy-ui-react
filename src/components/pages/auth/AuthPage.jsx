import React from 'react';
import styled from 'styled-components';
import { Route } from '../../../AppRouter';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import AuthCallbackPage from './AuthCallbackPage';
import SocialAuthBanner from '../../SocialAuthBanner';
import AppContent from '../../ui/AppContent';

const Container = styled(AppContent)`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background.container};
`;

const AuthPage = ({ match }) => (
  <Container>
    <SocialAuthBanner />
    <Route path={`${match.path}/signin`} component={SigninPage} />
    <Route path={`${match.path}/signup`} component={SignupPage} />
    <Route path={`${match.path}/callback`} component={AuthCallbackPage} />
  </Container>
);

export default AuthPage;
