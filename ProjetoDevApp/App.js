import React from 'react';
import Routes from './src/routes';
import LoginProvider from './src/utils/LoginProvider';

const App = () => {
  return (
    <LoginProvider>
      <Routes />
    </LoginProvider>
  );
};

export default App;
