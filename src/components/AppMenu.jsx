import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withAuthContext } from '../contexts/AuthContext';

// logo src
import logoSrc from '../assets/images/logo.svg';
import UserMenu from './UserMenu';

const Container = styled.div`
  width: 2.5rem;
  background: ${({ theme }) => theme.color.darkGray};
  padding: ${({ theme }) => theme.size.XXS};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.default};
  z-index: 2;
  position: relative;
`;

const AppLogo = styled.img`
  width: 100%;
  padding: 12px 0 3px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: filter 0.2s ease;

  &:hover, &:focus {
    -webkit-filter: none;
    filter: none;
  }
`;

class AppMenu extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { user, logout } = this.props;
    return (
      <Container>
        <Link to="/">
          <AppLogo src={logoSrc} alt="Wouvy" />
        </Link>
        {user !== null && (<UserMenu user={user} logout={logout} />)}
      </Container>
    )
  }
}

export default withAuthContext(AppMenu);