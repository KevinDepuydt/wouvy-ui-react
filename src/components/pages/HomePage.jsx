import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withAuthContext } from '../../contexts/AuthContext';
import WorkflowService from '../../services/workflow';
import { Page } from '../ui';

const Title = styled(Page.Title)`
  font-size: 2rem;
  border-bottom: none;
  padding: 0;
`;

const WorkflowItem = styled.div`
  
`;

class HomePage extends Component {
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
    this.workflows = new WorkflowService();
  }


  componentWillMount = async () => {
    const workflows = await this.workflows.list();
    console.log('WFs', workflows);
    this.setState({ workflows });
  };

  render() {
    console.log('HomePage.render', this.props);
    const { user } = this.props;
    return (
      <Page>
        <Page.FlexColumn>
          <Page.FlexBox>

          </Page.FlexBox>
          <Page.FlexBox>
            <Title>Bienvenue {user.username || user.firstname || user.email}</Title>
            <Page.Box>
              {this.state.workflows.map(wf => (<WorkflowItem />))}
            </Page.Box>
          </Page.FlexBox>
        </Page.FlexColumn>
      </Page>
    );
  }
}

export default withAuthContext(HomePage);
