import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withUser } from '../../contexts/AuthContext';
import ServiceProvider, { withService } from '../../contexts/ServiceContext';
import { Page, Button, Modal } from '../ui';
import WorkflowItem from '../WorkflowItem';
import WorkflowForm from '../forms/WorkflowForm';

const Title = styled(Page.Title)`
  font-size: 2rem;
  border-bottom: none;
  padding: 0;
  margin: 0rem 0 0.8rem;
`;

const WorkflowsList = styled(Page.Box)`
  .wf-item {
    margin-top: 1rem;
  }

  .wf-item ~ .wf-item {
    margin-left: 1rem;
  }
`;

class Home extends Component {
  static propTypes = {
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    workflows: [],
  };

  constructor(props) {
    super(props);
    this.workflowService = new props[ServiceProvider.WORKFLOW_SERVICE]();
  }

  async componentWillMount() {
    const workflows = await this.workflowService.list();
    console.log('WFs', workflows);
    this.setState({ workflows });
  }

  async handleSubmit(values, { setSubmitting }) {
    console.log('WorkflowCreate.handleSubmit', values);
    try {
      const result = await this.workflowService.create(values);
      console.log('WorkflowCreate.handleSubmit: success', result);
    } catch (e) {
      console.log('WorkflowCreate.handleSubmit: error', e);
    }
    setSubmitting(false);
  }

  render() {
    console.log('Home.render', this.props, this.state.workflows);
    const { user } = this.props;
    const { workflows } = this.state;
    return (
      <Page>
        <Page.FlexColumn>
          <Page.FlexRow align="center" justify="space-between">
            <Title>Bienvenue {user.username || user.firstname || user.email}</Title>
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
          </Page.FlexRow>
          <Page.FlexBox>
            <WorkflowsList>
              {workflows.map(wf => (<WorkflowItem key={wf._id} {...wf} />))}
            </WorkflowsList>
          </Page.FlexBox>
        </Page.FlexColumn>
      </Page>
    );
  }
}

export default withUser(withService(ServiceProvider.WORKFLOW_SERVICE)(Home));
