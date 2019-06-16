import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { darken } from 'polished';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  font: ${({ theme }) => theme.size.S} "Open Sans Bold", sans-serif;
  color: ${({ theme }) => theme.color.darkGray};
  cursor: pointer;
  position: relative;
  flex: 1;
  
  .placeholder {
    font: ${({ theme }) => theme.size.S} "Open Sans Semi Bold", sans-serif;
    color: ${({ theme }) => darken(0.1, theme.color.lighterGray)};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.size.XXS};
  font-size: ${({ theme }) => theme.size.S};
  font-weight: 700;
`;

const Trigger = styled.div`
  padding: 10px 10px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid ${({ theme, open }) => open ? theme.color.yellow : theme.color.lighterGray};
  border-radius: 4px;
  transition: border 300ms ease, background-color 300ms ease;
  
  ${({ open }) => open && `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.color.yellow};
  }
`;

const Option = styled.span`
  padding: 0.5rem;
  background-color: ${({ selected, theme }) => selected ? `${theme.color.yellow} !important` : theme.color.white };
  color: ${({ selected, theme }) => selected ? theme.color.white : theme.color.darkGray };
  
  :hover {
    color: ${({ selected, theme }) => selected ? theme.color.white : theme.color.yellow };
  }
  
  transition: color 200ms ease;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 0;
  left: 0;
  top: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.yellow};
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  
  ${Option}:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

class Select extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    placeholder: '',
    value: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: props.value,
      selectedOption: props.value !== null ? props.options.find(o => o.value === props.value) : null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      const { value, options } = this.props;
      this.setState(({
        value,
        selectedOption: value !== null ? options.find(o => o.value === value) : null,
      }));
    }
  }

  select(option) {
    this.setState({
      value: option.value,
      selectedOption: option,
      open: false,
    });
    this.props.onSelect(option.value);
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const { label, placeholder, options } = this.props;
    const { open, selectedOption } = this.state;
    return (
      <Wrapper>
        {label !== null && (<Label>{label}</Label>)}
        <Trigger open={open} onClick={() => this.setState(state => ({ open: !state.open }))}>
          <span>{selectedOption ? selectedOption.label : (<span className="placeholder">{placeholder}</span>)}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </Trigger>
        {open && (
          <Options>
            {options.map(o => (
              <Option
                key={o.value}
                selected={selectedOption && selectedOption.value === o.value}
                onClick={() => this.select.bind(this)(o)}
              >
                {o.label}
              </Option>
            ))}
          </Options>
        )}
      </Wrapper>
    );
  }
}

export default onClickOutside(Select);
