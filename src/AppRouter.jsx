import React from 'react';
import { BrowserRouter, Switch, Route as BaseRoute, Redirect } from 'react-router-dom';
import { AuthContext, withLoading } from './contexts/AuthContext';
import { AuthPage, HomePage, NotFoundPage, UserProfilePage } from './components/pages';
import TopBar from './components/TopBar';
import AppLoader from './components/AppLoader';

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
      ? (<AppLoader />)
      : (
        <React.Fragment>
          <TopBar />
          <Switch>
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute path="/profile" component={UserProfilePage} />
            <Route path="/auth" component={AuthPage} />
            <BaseRoute component={NotFoundPage} />
          </Switch>
        </React.Fragment>
      )
    }
  </BrowserRouter>
);

export default withLoading(AppRouter);
