import React from 'react';
import { BrowserRouter, Switch, Route as BaseRoute, Redirect } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <BaseRoute
        render={props => user !== null ? <Component {...props} /> : <Redirect to="/signin" />}
        {...props}
      />
    )}
  </AuthContext.Consumer>
);

/**
 * Re-define react-router-dom Route to redirect user to home page if already logged in
 */
const Route = ({ component: Component, ...props }) => (
  <AuthContext.Consumer>
    {({ user }) => (
      <BaseRoute
        render={props => user === null ? <Component {...props} /> : <Redirect to="/" />}
        {...props}
      />
    )}
  </AuthContext.Consumer>
);

const NotFound = () => (<p>Not found =/</p>);

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={HomePage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
