import React from 'react';
import WorkflowService from '../services/workflow';

export const WorkflowContext = React.createContext({});

export default class WorkflowProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workflows: [],
      currentWorkflow: null,
    };
    this.service = new WorkflowService();
  }

  async componentWillMount() {
    const workflows = await this.service.list();
    const lastWorkflowId = localStorage.getItem('lastWorkflowId');
    const currentWorkflow = lastWorkflowId !== null ? workflows.find(w => w._id === lastWorkflowId) : null;
    this.setState({ workflows, currentWorkflow });
  }

  setCurrentWorkflow(workflowId) {
    this.setState((state) => ({ currentWorkflow: state.workflows.find(w => w._id === workflowId) }));
    localStorage.setItem('lastWorkflowId', workflowId);
  }

  render() {
    const { children } = this.props;
    return (
      <WorkflowContext.Provider
        value={{
          ...this.state,
          workflowService: this.service,
          setCurrentWorkflow: this.setCurrentWorkflow.bind(this),
        }}
      >
        {children}
      </WorkflowContext.Provider>
    );
  }
}

export const withWorkflowContext = Component => props => (
  <WorkflowContext.Consumer>{store => <Component {...props} {...store} />}</WorkflowContext.Consumer>
);

export const withWorkflows = Component => props => (
  <WorkflowContext.Consumer>{store => <Component {...props} workflows={store.workflows} />}</WorkflowContext.Consumer>
);

export const withWorkflow = Component => props => (
  <WorkflowContext.Consumer>{store => <Component {...props} workflow={store.currentWorkflow} />}</WorkflowContext.Consumer>
);
