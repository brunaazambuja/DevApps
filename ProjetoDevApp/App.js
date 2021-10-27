import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import LoginProvider from './src/utils/LoginProvider';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <LoginProvider>
      <Routes />
    </LoginProvider>
  );
};

export default App;
