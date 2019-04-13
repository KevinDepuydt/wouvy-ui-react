import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './ui/Image';

const Container = styled.div`
  position: relative;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const UserImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 5px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 13px;
  color: #d1d1d1;
`;

const Menu = styled.div`
  background-color: white;
  padding: 5px;
  transition: display 0.2s ease;
  min-width: 230px;
  border-radius: 4px;
  box-shadow: 0 1px 5px 2px rgba(0,0,0,0.05);
  z-index: 10;
  position: absolute;
  top: 60px;
  right: 0;
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
  }
`;

const UserMenu = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  UserMenu.handleClickOutside = () => setIsOpen(false);
  return (
    <Container>
      <Head onClick={() => setIsOpen(!isOpen)}>
        <UserImage src={user.picture} errSrc={user.avatar} alt="user profile" />
        <StyledIcon icon={faChevronDown} />
      </Head>
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
