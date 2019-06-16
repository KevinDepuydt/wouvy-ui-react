import React from 'react';
import { withWorkflow } from '../../contexts/WorkflowContext';
import { Page} from '../ui';

class Polls extends React.Component {
  render() {
    const { workflow } = this.props;
    return workflow ? (
      <React.Fragment>
        <Page.Title>Sondages ({workflow.name})</Page.Title>
      </React.Fragment>
    ) : null;
  }
}

export default withWorkflow(Polls);
