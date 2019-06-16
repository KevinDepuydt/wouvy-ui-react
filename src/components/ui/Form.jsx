import React from 'react';
import styled, { css } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';

const StyledForm = styled.form`
  margin: 0 auto;
  ${props => props.width && `width: ${props.width}px;`}
`;

const Group = styled.div`
  margin: ${({ theme }) => theme.size.XS} 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.size.XS};
  font-size: ${({ theme }) => theme.size.M};
  font-weight: 700;
`;

const inputStyles = css`
  display: block;
  width: calc(100% - 20px);
  background-color: #fff;
  font: ${({ theme }) => theme.size.S} "Open Sans Bold", sans-serif;
  border: 1px solid ${({ theme }) => theme.color.lighterGray};
  border-radius: 4px;
  padding: 10px 10px 8px;
  transition: border 300ms ease, background-color 300ms ease;
  color: ${({ theme }) => theme.color.darkGray};
  
  &:hover {
    border-color: ${({ theme }) => rgba(theme.color.yellow, 0.5)};
  }

  &:focus {
    outline: 0;
    background-color: #fafafa;
    border-color: ${({ theme }) => theme.color.yellow};
  }
  
  ::placeholder {
    font: ${({ theme }) => theme.size.S} "Open Sans Semi Bold", sans-serif;
    color: ${({ theme }) => darken(0.1, theme.color.lighterGray)};
  }
  
  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.color.lighterGray} !important;
    border-color: ${({ theme }) => theme.color.lighterGray} !important;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
`;

const Actions = styled.div`
  margin-top: 1.875rem;
  text-align: ${({ align }) => align ? align : 'center'};
`;

const Error = styled.p`
  margin: 0.2rem 0 0 0.3125rem;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.size.S};
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
