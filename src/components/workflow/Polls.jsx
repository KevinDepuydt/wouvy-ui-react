import React from 'react';
import { withWorkflow } from '../../contexts/WorkflowContext';
import { Page} from '../ui';

class Polls extends React.Component {
  render() {
    console.log("Polls props", this.props);
    const { workflow } = this.props;
    return (
      <React.Fragment>
        <Page.Title>Sondages {workflow ? workflow.name : ''}</Page.Title>
      </React.Fragment>
    );
  }
}

export default withWorkflow(Polls);
