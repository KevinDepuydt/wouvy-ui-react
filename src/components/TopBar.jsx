import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { withAuthContext } from '../contexts/AuthContext';

// logo src
import logoSrc from '../assets/images/logo.svg';
import UserMenu from './UserMenu';

const Container = styled.div`
  background: ${props => props.theme.background.topMenu};
  padding: 0 ${props => props.theme.size.XXL};
  height: 4.375rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: ${props => props.theme.shadow.default};
  z-index: 2;
  position: relative;
`;

const AppLogo = styled.img`
  height: 2rem;
  padding: 12px 0 3px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: filter 0.2s ease;

  &:hover, &:focus {
    -webkit-filter: none;
    filter: none;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  height: 100%;
`;

const MenuLink = styled(NavLink)`
  font: ${props => props.theme.size.M} "Open Sans Bold", sans-serif;
  color: ${props => props.theme.color.lightGray};
  line-height: 4.5rem;
  border-bottom: 5px solid transparent;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 5px;
  transition: color 300ms ease, border-color 300ms ease;

  &:hover {
    color: ${props => props.theme.color.darkGray};
  }

  &.active {
    color: ${props => props.theme.color.darkGray};
    border-bottom-color: ${props => props.theme.color.yellow};
  }
`;

class TopBar extends React.Component {
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
        {user
          ? (
            <UserMenu user={user} logout={logout} />
          ) : (
            <MenuLinks>
              <MenuLink to="/auth/signin" activeClassName="active">Connexion</MenuLink>
              <MenuLink to="/auth/signup" activeClassName="active">Inscription</MenuLink>
            </MenuLinks>
          )
        }
      </Container>
    )
  }
}

export default withAuthContext(TopBar);