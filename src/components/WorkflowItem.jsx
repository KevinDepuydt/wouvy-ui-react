import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkIconButton } from './ui';

// Informations
const Name = styled.p`
  color: ${props => props.theme.color.darkGray};
  font: ${props => props.theme.size.S} "Open Sans Semi Bold";
`;

const UserCount = styled.p`
  color: ${props => props.theme.color.lightGray};
  font: ${props => props.theme.size.M} "Open Sans";

  i, svg {
    font-size: ${props => props.theme.size.M};
    width: 25px;
    text-align: center;
  }
`;

const Overview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: ${props => props.theme.size.M};
  
  ${Name}, ${UserCount} {
    margin: 0;
  }
`;

// Settings
const Actions = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: ${props => props.theme.size.M};
`;

// Main container
const Wrapper = styled.div.attrs({ className: 'wf-item' })`
  background-color: ${props => props.theme.color.white};
  border-radius: 4px;
  display: inline-flex;
  flex-direction: row;
  padding: ${props => props.theme.size.XS};
  box-shadow: $default-box-shadow;
  width: 5rem;
  height: 5rem;
  
  &:focus {
    outline: none;
  }
`;

const WorkflowItem = ({ _id, name, users }) => (
  <Wrapper>
    <Overview>
      <Name><Link to={`/w/${_id}`}>{name}</Link></Name>
      <UserCount>
        <FontAwesomeIcon icon={faUser} />
        {users.length}
      </UserCount>
    </Overview>
    <Actions>
      <LinkIconButton to={`/w/${_id}`} icon={faCog} />
    </Actions>
  </Wrapper>
);

WorkflowItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }))
};

export default WorkflowItem;
