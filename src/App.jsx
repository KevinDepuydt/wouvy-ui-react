import React, { Component } from 'react';
import AppRouter from './AppRouter';

// @TODO: refactor to render Router directly if App is not useful
class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
