import React from 'react';
import { BrowserRouter, Switch, Route as BaseRoute, Redirect } from 'react-router-dom';
import { AuthContext, withLoading } from './contexts/AuthContext';
import { AuthRouter, NotFound, UserProfilePage } from './components/pages';
import AppMenu from './components/AppMenu';
import AppLoader from './components/AppLoader';
import WorkflowRouter from './components/workflow/WorkflowRouter';

/**
 * Protected route redirects user to signin page if not logged in
 */
export const ProtectedRoute = ({ component: Component, ...props }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <BaseRoute
        render={props => user !== null ? <Component {...props} /> : <Redirect to="/auth/signin" />}
        {...props}
      />
    )}
  </AuthContext.Consumer>
);

/**
 * Re-define react-router-dom Route to redirect user to home page if already logged in
 */
export const Route = ({ component: Component, ...props }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <BaseRoute
        render={props => user === null ? <Component {...props} /> : <Redirect to="/" />}
        {...props}
      />
    )}
  </AuthContext.Consumer>
);

const AppRouter = ({ loading }) => (
  <BrowserRouter>
    {loading
      ? <AppLoader />
      : <React.Fragment>
          <AppMenu />
          <Switch>
            <Route path="/auth" component={AuthRouter} />
            <ProtectedRoute path="/profile" component={UserProfilePage} />
            <ProtectedRoute path="/" component={WorkflowRouter} />
            <BaseRoute component={NotFound} />
          </Switch>
        </React.Fragment>
    }
  </BrowserRouter>
);

export default withLoading(AppRouter);
