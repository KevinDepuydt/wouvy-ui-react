import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '../ui';
import WorkflowProvider from '../../contexts/WorkflowContext';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Polls from './Polls';
import Tasks from './Tasks';
import { NotFound } from '../pages';

const WF_ID_REGEX = new RegExp('([a-f\\d]{24})');

export default class WorkflowRouter extends React.Component {
  onWorkflowChange(workflowId) {
    // get new location by replacing old workflow id by the new one
    const newLocation = this.props.location.pathname.replace(WF_ID_REGEX, workflowId);
    // push new path to router history
    this.props.history.push(newLocation);
  }

  render() {
    return (
      <WorkflowProvider>
        <Navigation onWorkflowChange={this.onWorkflowChange.bind(this)} />
        <Page>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/w/:workflowId/polls" component={Polls} />
            <Route exact path="/w/:workflowId/tasks" component={Tasks} />
            <Route component={NotFound} />
          </Switch>
        </Page>
      </WorkflowProvider>
    );
  }
}
