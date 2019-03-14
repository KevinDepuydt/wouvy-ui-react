import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </React.Fragment>
  </Router>
);

export default AppRouter;
