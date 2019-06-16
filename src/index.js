import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';
import App from './App';
import ServiceProvider from './contexts/ServiceContext';
import AuthProvider from './contexts/AuthContext';
import { theme, GlobalStyle } from './config/styles';

ReactDOM.render(
  <ServiceProvider>
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </ServiceProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
