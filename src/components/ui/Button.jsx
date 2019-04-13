import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten, rgba } from 'polished';

const StyledButton = styled.button`
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

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['yellow', 'red', 'green', 'purple', 'grey']),
};

Button.defaultProps = {
  color: 'yellow',
};

export default Button;
