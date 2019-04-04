import React from 'react';
import styled from 'styled-components';
import { faFacebookF, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import env from '../env';

const Container = styled.div`
  padding: 0 5rem;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAuthLink = styled.a`
  font-size: 3rem;
  margin: 10px;
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

const SocialAuthBanner = () => (
  <Container>
    <SocialAuthLink network="google" icon={faGoogle} />
    <SocialAuthLink network="linkedin" icon={faLinkedin} />
    <SocialAuthLink network="github" icon={faGithub} />
    <SocialAuthLink network="facebook" icon={faFacebookF} />
  </Container>
);

export default SocialAuthBanner;
