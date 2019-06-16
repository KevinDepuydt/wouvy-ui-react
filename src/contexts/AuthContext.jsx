import React, { createContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext([]);

export const USER_TOKEN_KEY = 'token';

export default class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: null,
      loading: true,
    };
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.initUser = this.initUser.bind(this);
  }

  componentDidMount() {
    // get token
    const token = localStorage.getItem(USER_TOKEN_KEY);
    console.log('AuthProvider.componentDidMount: user is logged', token !== null);
    this.initUser(token);
    this.setState({ loading: false });
  }

  initUser(token) {
    console.log('AuthProvider.initUser');
    // decode token if not null
    if (token !== null) {
      const decoded = jwtDecode(token);

      // set token and user
      this.setState({ token, user: decoded._doc });
    }
  }

  authenticate(token) {
    console.log('AuthProvider.authenticate');
    localStorage.setItem(USER_TOKEN_KEY, token);
    this.initUser(token);
  }

  logout() {
    console.log('AuthProvider.login');
    localStorage.removeItem(USER_TOKEN_KEY);
    this.setState({ token: null, user: null });
  }

  render() {
    console.log('AuthProvider.render', this.state);
    const { user, loading } = this.state;
    return (
      <AuthContext.Provider
        value={{
          authenticate: this.authenticate,
          logout: this.logout,
          user,
          loading,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

// expose user to the Component
const withAuthContext = Component => props => (
  <AuthContext.Consumer>
    {store => <Component {...props} {...store} />}
  </AuthContext.Consumer>
);

// expose user to the Component
const withUser = Component => props => (
  <AuthContext.Consumer>
    {store => <Component {...props} user={store.user} />}
  </AuthContext.Consumer>
);

const withLoading = Component => props => (
  <AuthContext.Consumer>
    {store => <Component {...props} loading={store.loading} />}
  </AuthContext.Consumer>
);

export { AuthContext, withAuthContext, withUser, withLoading };
