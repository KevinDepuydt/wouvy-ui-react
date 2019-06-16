import React from 'react';
// services
import AuthService from '../services/auth';
import UserService from '../services/user';
import WorkflowService from '../services/workflow';

export const ServiceContext = React.createContext({});

export default class ServiceProvider extends React.Component {
  static AUTH_SERVICE = 'auth';
  static USER_SERVICE = 'user';
  static WORKFLOW_SERVICE = 'workflow';

  constructor(props) {
    super(props);

    // Service list
    this.services = {
      [ServiceProvider.AUTH_SERVICE]: AuthService,
      [ServiceProvider.USER_SERVICE]: UserService,
      [ServiceProvider.WORKFLOW_SERVICE]: WorkflowService,
    };
  }

  _getServiceProp(name) {
    return { [name]: this.services[name] || null };
  }

  render() {
    const { children } = this.props;
    return (
      <ServiceContext.Provider value={this._getServiceProp.bind(this)}>
        {children}
      </ServiceContext.Provider>
    );
  }
}

export const withService = name => Component => props => (
  <ServiceContext.Consumer>{getService => <Component {...props} {...getService(name)} />}</ServiceContext.Consumer>
);
