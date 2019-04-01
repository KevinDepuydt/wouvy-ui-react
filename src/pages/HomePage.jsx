import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withAuthContext } from '../contexts/AuthContext';

class HomePage extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    console.log('HomePage.render');
    return (
      <div>
        <p>Home</p>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Register</Link>
        <button onClick={this.props.logout}>log out</button>
      </div>
    );
  }
}

export default withAuthContext(HomePage);
