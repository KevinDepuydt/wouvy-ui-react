import React from 'react';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';

const StyledForm = styled.form`
  margin: 0 auto;
`;

const Group = styled.div`
  margin: ${props => props.theme.size.XS} 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.size.XS};
`;

const Input = styled.input`
  display: block;
  width: calc(100% - 20px);
  background-color: #ffffff;
  font: ${props => props.theme.size.S} "Open Sans Bold", sans-serif;
  border: 1px solid ${props => props.theme.color.lighterGray};
  border-radius: 4px;
  padding: 10px 10px 8px;
  transition: border 300ms ease;
  color: ${props => props.theme.color.darkGray};

  &:hover {
    border-color: ${props => rgba(props.theme.color.yellow, 0.5)};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    border-color: ${props => props.theme.color.yellow};
  }

  :disabled {
    cursor: default;
    background-color: ${props => props.theme.color.lighterGray} !important;
    border-color: ${props => props.theme.color.lighterGray} !important;
  }
  
  ::placeholder {
    font: ${props => props.theme.size.S} "Open Sans Semi Bold", sans-serif;
    color: ${props => darken(0.1, props.theme.color.lighterGray)};
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: calc(100% - 20px);
  background-color: #ffffff;
  font: ${props => props.theme.size.S} "Open Sans Bold", sans-serif;
  border: 1px solid ${props => props.theme.color.lighterGray};
  border-radius: 4px;
  padding: 10px 10px 8px;
  transition: border 300ms ease;
  color: ${props => props.theme.color.darkGray};

  &:hover {
    border-color: ${props => rgba(props.theme.color.yellow, 0.5)};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    border-color: ${props => props.theme.color.yellow};
  }

  [disabled] {
    cursor: not-allowed;
    background-color: #ddd !important;
    border-color: #bbb !important;
  }
  
  ::placeholder {
    font: ${props => props.theme.size.S} "Open Sans Semi Bold", sans-serif;
    color: ${props => darken(0.1, props.theme.color.lighterGray)};
  }
`;

const Actions = styled.div`
  margin-top: 1.875rem;
  text-align: ${props => props.align ? props.align : 'center'};
`;

const Error = styled.p`
  margin: 0.2rem 0 0 0.3125rem;
  color: ${props => props.theme.color.red};
  font-size: ${props => props.theme.size.S};
`;

export default class Form extends React.Component {
  static Actions = Actions;
  static Error = Error;
  static Group = Group;
  static Input = Input;
  static Label = Label;
  static TextArea = TextArea;

  render() {
    return (<StyledForm {...this.props} />);
  }
};
