import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Create the keyframes
const fade = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const ModalWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,.2);
  min-width: 40vw;
  animation: ${fade} 300ms ease;
`;

const ModalHead = styled.div`
  padding: ${({ theme }) => theme.size.XXS} ${({ theme }) => theme.size.L};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.size.XL};
  color: ${({ theme }) => theme.color.darkGray};
`;

const ModalCloseButton = styled.button`
  position: relative;
  left: ${({ theme }) => theme.size.XXS};
  font-size: ${({ theme }) => theme.size.M};
  padding: ${({ theme }) => theme.size.XXS};
  background: none;
  border: none;
  cursor: pointer;
  
  :focus {
    outline: none;
  }
`;

const ModalContent = styled.div`
  padding: 1em;
`;

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    trigger: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  open() {
    this.setState(({ open: true }));
  }

  close() {
    this.setState(({ open: false }));
  }

  render() {
    const { children, trigger, title } = this.props;
    const { open } = this.state;

    // render if visible
    return open ? (
      <ModalWrapper>
        <ModalContainer>
          <ModalHead>
            <ModalTitle>{title}</ModalTitle>
            <ModalCloseButton onClick={this.close.bind(this)}>
              <FontAwesomeIcon icon={faTimes} />
            </ModalCloseButton>
          </ModalHead>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    ) : trigger(this.open.bind(this));
  }
}
