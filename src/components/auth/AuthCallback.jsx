import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string/index';
import { withAuthContext } from '../../contexts/AuthContext';

class AuthCallback extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  state = {
    isTokenValid: true,
  };

  componentWillMount() {
    const { token } = parse(this.props.location.search);
    if (!!token) {
      this.props.authenticate(token);
    } else {
      this.setState({ isTokenValid: false });
    }
  }

  render() {
    return this.state.isTokenValid ? null : <Redirect to="/signin" />;
  }
}

export default withAuthContext(AuthCallback);
