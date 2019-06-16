import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
import { Image } from './ui';

const Container = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`;

const UserImage = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2.5rem;
  cursor: pointer;
`;

const Menu = styled.div`
  background-color: white;
  padding: 5px;
  transition: display 0.2s ease;
  border-radius: 4px;
  box-shadow: 0 1px 5px 2px rgba(0,0,0,0.05);
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: calc(100% + 5px);
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: #a5afbf;
  text-decoration: none;
  font: 12px "Open Sans Semi Bold", sans-serif;
  
  &:hover {
    color: #3f4147;
    text-decoration: none;
    cursor: pointer;
  }
  
  i, svg {
    font-size: 16px;
    margin-left: 1rem;
  }
`;

const LogoutButton = styled.button`
  width: 100%
  border: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: #a5afbf;
  text-decoration: none;
  font: 12px "Open Sans Semi Bold", sans-serif;
  
  &:hover {
    color: #3f4147;
    text-decoration: none;
    cursor: pointer;

    i, svg {
      color: #bf3e3a;
    }
  }
  
  &:focus {
    outline: none;
  }
  
  i, svg {
    font-size: 16px;
    margin-left: 1rem;
  }
`;

const UserMenu = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  UserMenu.handleClickOutside = () => setIsOpen(false);
  return (
    <Container>
      <UserImage onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} src={user.picture} errSrc={user.avatar} alt="user profile" />
      {isOpen && (
        <Menu>
          <MenuLink to="/profile">
            <span>Mon profil</span>
            <i className="icon-parameters" aria-hidden="true" />
          </MenuLink>
          <LogoutButton onClick={logout}>
            <span>Déconnexion</span>
            <i className="icon-close" aria-hidden="true" />
          </LogoutButton>
        </Menu>
      )}
    </Container>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => UserMenu.handleClickOutside
};

export default onClickOutside(UserMenu, clickOutsideConfig);
