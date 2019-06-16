import React from 'react';
import { withWorkflow } from '../../contexts/WorkflowContext';
import { Page} from '../ui';

class Tasks extends React.Component {
  render() {
    const { workflow } = this.props;
    return workflow ? (
      <React.Fragment>
        <Page.Title>Tâches ({workflow.name})</Page.Title>
      </React.Fragment>
    ) : null;
  }
}

export default withWorkflow(Tasks);
