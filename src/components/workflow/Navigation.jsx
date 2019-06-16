import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withWorkflowContext } from '../../contexts/WorkflowContext';
import { Select } from '../ui';

const Wrapper = styled.div`
  width: 20vw;
  max-width: 15rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.default};
  background: ${({ theme }) => theme.color.lighterGray};
`;

const WorkflowNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-family: "Open Sans Semi Bold", sans-serif;
  font-size: ${({ theme }) => theme.size.M};
  color: ${({ theme }) => theme.color.darkGray};
  padding: 0.2rem 0;
  
  &:hover {
    cursor: pointer;
  }

  span {
    margin-left: 0.2rem;
  }
  
  &.active {
    i, svg {
      color: ${({ theme }) => theme.color.yellow};
    }
  }
`;

const WorkflowNavigation = styled.div`
  margin-top: 1.5rem;
`;

class Navigation extends React.Component {
  static propTypes = {
    onWorkflowChange: PropTypes.func.isRequired,
  };

  render() {
    console.log('Navigation.props', this.props);
    const { currentWorkflow, workflows, setCurrentWorkflow, onWorkflowChange } = this.props;
    return (
      <Wrapper>
        <Select
          label="Workflow sélectionné"
          value={currentWorkflow ? currentWorkflow._id : null}
          options={workflows.map(w => ({ value: w._id, label: w.name }))}
          onSelect={(workflowId) => {
            setCurrentWorkflow(workflowId);
            onWorkflowChange(workflowId);
          }}
        />
        {currentWorkflow !== null && (
          <WorkflowNavigation>
            <WorkflowNavLink to={`/w/${currentWorkflow._id}/tasks`}>
              <i className="icon-tache" aria-hidden="true" />
              <span>Tâches</span>
            </WorkflowNavLink>
            <WorkflowNavLink to={`/w/${currentWorkflow._id}/polls`}>
              <i className="icon-vote" aria-hidden="true" />
              <span>Sondages</span>
            </WorkflowNavLink>
          </WorkflowNavigation>
        )}
      </Wrapper>
    );
  }
}

export default withWorkflowContext(Navigation);
