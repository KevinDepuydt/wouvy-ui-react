import React, { createContext } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext([]);

const USER_TOKEN_KEY = 'token';

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      user: null,
      token: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // get token
    const token = localStorage.getItem(USER_TOKEN_KEY);
    console.log('AuthProvider.init: user is logged', token !== null);

    // decode token if not null
    if (token !== null) {
      const decoded = jwtDecode(token);

      // set token and user
      this.setState({ token, user: decoded._doc });
    }
  }

  login() {}

  logout () {}

  render() {
    const { isAuth, user } = this.state;
    return (
      <AuthContext.Provider
        value={{
          isAuth,
          login: this.login,
          logout: this.logout,
          user,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

// expose user to the Component
const withUser = Component => props => (
  <AuthContext.Consumer>
    {store => <Component {...props} user={store.user} />}
  </AuthContext.Consumer>
);

export { AuthContext, AuthProvider, withUser };
