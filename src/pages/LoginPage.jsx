import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <p>Login</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default LoginPage;
