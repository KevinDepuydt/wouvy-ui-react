import React from 'react';
import styled from 'styled-components';
import { Route } from '../../AppRouter';
import SigninPage from './Signin';
import SignupPage from './Signup';
import AuthCallbackPage from './AuthCallback';
import { Page } from '../ui';
import env from '../../env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faFacebookF, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons/index';

const PageFlexContent = styled(Page.FlexContent)`
  padding: 0;
  z-index: 1;
`;

const SocialAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  background-color: ${props => props.theme.color.lighterGray};
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

const StyledAuthLink = styled.a`
  font-size: 2.5rem;
  margin: ${props => props.theme.size.XS};
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.color.lightGray};
  transition: color 0.2s ease;

  &.google {
    &:hover {
      color: ${props => props.theme.color.google};
    }
  }
  
  &.linkedin {
    &:hover {
      color: ${props => props.theme.color.linkedin};
    }
  }
  
  &.github {
    &:hover {
      color: ${props => props.theme.color.github};
    }
  }
  
  &.facebook {
    &:hover {
      color: ${props => props.theme.color.facebook};
    }
  }
`;

const SocialAuthLink = ({ network, icon }) => (
  <StyledAuthLink href={`${env.apiUrl}/api/auth/${network}`} className={network}>
    <FontAwesomeIcon icon={icon} />
  </StyledAuthLink>
);

const AuthRouter = ({ match }) => (
  <PageFlexContent direction="row">
    <SocialAuthContainer>
      <SocialAuthLink network="google" icon={faGoogle} />
      <SocialAuthLink network="linkedin" icon={faLinkedin} />
      <SocialAuthLink network="github" icon={faGithub} />
      <SocialAuthLink network="facebook" icon={faFacebookF} />
    </SocialAuthContainer>
    <Route path={`${match.path}/signin`} component={SigninPage} />
    <Route path={`${match.path}/signup`} component={SignupPage} />
    <Route path={`${match.path}/callback`} component={AuthCallbackPage} />
  </PageFlexContent>
);

export default AuthRouter;
