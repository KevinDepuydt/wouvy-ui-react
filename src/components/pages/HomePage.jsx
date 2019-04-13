import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuthContext } from '../../contexts/AuthContext';

class HomePage extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  render() {
    console.log('HomePage.render');
    return (
      <div>
        <p>Home</p>
      </div>
    );
  }
}

export default withAuthContext(HomePage);
