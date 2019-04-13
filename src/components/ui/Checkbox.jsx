import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// checked icon
import checkIconSrc from '../../assets/images/check.svg';

const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: ${props => props.theme.size.M};
  display: flex;
  align-items: center;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.size.M};
  height: ${props => props.theme.size.M};
  border: 0.125rem solid ${props => props.theme.color.yellow};
  border-radius: 0.25rem;
  background: ${props => props.checked ? props.theme.color.yellow : 'transparent'}
  border-radius: 3px;
  vertical-align: middle;
  transition: all 150ms;
  margin-right: 0.5rem;
  
  img {
    width: 12px;
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
  
  :disabled {
    + label {
      color: #aaa;

      :before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
    }

    :checked {
      + label {
        :after {
          color: #999;
        }
      }
    }
  }
`;

const Checkbox = ({ checked, label, ...props }) => (
  <CheckboxLabel>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <img src={checkIconSrc} alt="check" />
    </StyledCheckbox>
    <span>{label}</span>
  </CheckboxLabel>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
};

export default Checkbox;
