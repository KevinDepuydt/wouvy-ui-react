import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, lighten, rgba } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const btnStyles = css`
  padding: ${props => props.theme.size.XXS} ${props => props.theme.size.S};
  border: none;
  font: ${props => props.theme.size.S} "Open Sans Bold", sans-serif;
  text-transform: uppercase;
  border-radius: 4px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  
  ${props => props.color !== 'grey' && 'text-shadow: 0 0.0625rem 0 rgba(0,0,0,0.05);'}
  color: ${props => props.color === 'grey' ? props.theme.color.lightGray : '#fff'};
  background-color: ${props => props.theme.color.button[props.color]};

  :focus, :hover, :active {
    cursor: pointer;
    color: ${props => props.color === 'grey' ? props.theme.color.lightGray : '#fff'};
    background-color: ${props => props.color === 'grey' ? darken(0.05, props.theme.color.button[props.color]) : lighten(0.05, props.theme.color.button[props.color])};
    box-shadow: 0 0 80px 5px ${props => rgba(props.theme.color.button[props.color], 0.4)};
  }
  
  :focus {
    outline: none !important;
  }

  :disabled {
    text-shadow: none;
    background-color: ${props => props.theme.color.lighterGray} !important;
    color: ${props => props.theme.color.lightGray} !important;

    &:focus, &:hover, &:active {
      cursor: default !important;
      background-color: ${props => props.theme.color.lighterGray} !important;
      color: ${props => props.theme.color.lightGray} !important;
      box-shadow: none !important;
    }
  }
  
  i, svg {
    font-size: ${props => props.theme.size.M};
  }
`;

// Button
const StyledButton = styled.button`
  ${btnStyles}
`;

export const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'green', 'purple', 'grey']),
};

Button.defaultProps = {
  color: 'yellow',
};

// Link button
const StyledLinkButton = styled(Link)`
  ${btnStyles}
  text-decoration: none;
`;

export const LinkButton = ({ children, ...props }) => (
  <StyledLinkButton {...props}>{children}</StyledLinkButton>
);

LinkButton.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'green', 'purple', 'grey']),
};

LinkButton.defaultProps = {
  color: 'yellow',
};

// Link Icon button
const StyledLinkIconButton = styled(Link)`
  border: none;
  background: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  height: none;
  width: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const LinkIconButton = ({ icon, ...props }) => (
  <StyledLinkIconButton {...props}>
    <FontAwesomeIcon icon={icon} />
  </StyledLinkIconButton>
);

LinkIconButton.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'green', 'purple', 'grey']),
  icon: PropTypes.shape({}).isRequired,
};

LinkIconButton.defaultProps = {
  color: 'yellow',
};

// Icon Button
const StyledIconButton = styled.button`
  ${btnStyles}
  padding: 0.3rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 2rem;
  line-height: 0.5rem;
`;

export const IconButton = ({ icon, ...props }) => (
  <StyledIconButton {...props}>
    <FontAwesomeIcon icon={icon} />
  </StyledIconButton>
);

IconButton.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'green', 'purple', 'grey']),
};

IconButton.defaultProps = {
  color: 'yellow',
};
