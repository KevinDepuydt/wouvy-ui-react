import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withWorkflowContext } from '../../contexts/WorkflowContext';
import { Button, Modal, Select } from '../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import WorkflowForm from '../forms/WorkflowForm';

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
  font-size: ${({ theme }) => theme.size.S};
  color: ${({ theme }) => theme.color.darkGray};
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 100ms ease;

  &:hover, &:focus {
    background-color: rgba(0,0,0,0.05);
  }

  span {
    margin-left: 0.2rem;
  }
  
  &.active {
    background-color: ${({ theme }) => theme.color.darkGray};
    color: white;
  }
`;

const WorkflowNavigation = styled.div`
  margin-top: 1.5rem;
  
  ${WorkflowNavLink} ~ ${WorkflowNavLink} {
    margin-top: 0.25rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.size.XXS};
  font-size: ${({ theme }) => theme.size.S};
  font-weight: 700;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  button {
    margin-left: 10px;
  }
`;

class Navigation extends React.Component {
  static propTypes = {
    onWorkflowChange: PropTypes.func.isRequired,
  };

  async handleSubmit(values, { setSubmitting }) {
    console.log('WorkflowCreate.handleSubmit', values);
    try {
      const result = await this.props.workflowService.create(values);
      console.log('WorkflowCreate.handleSubmit: success', result);
    } catch (e) {
      console.log('WorkflowCreate.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    const { currentWorkflow, workflows, setCurrentWorkflow, onWorkflowChange } = this.props;
    return (
      <Wrapper>
        <Label>Workflow sélectionné</Label>
        <SelectionContainer>
          {workflows.length > 0 && (
            <Select
              value={currentWorkflow ? currentWorkflow._id : null}
              options={workflows.map(w => ({ value: w._id, label: w.name }))}
              onSelect={(workflowId) => {
                setCurrentWorkflow(workflowId);
                onWorkflowChange(workflowId);
              }}
            />
          )}
          <Modal
            title="Nouveau Workflow"
            trigger={(toggleOpen) => (
              <Button onClick={toggleOpen}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            )}
          >
            <WorkflowForm onSubmit={this.handleSubmit.bind(this)} />
          </Modal>
        </SelectionContainer>
        {currentWorkflow !== null && (
          <WorkflowNavigation>
            <Label>Elements du workflow</Label>
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
