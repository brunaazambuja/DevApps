import React, { useState, useEffect } from 'react';
import Routes from './src/routes';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import LoginProvider from './src/utils/LoginProvider';
import FirebaseUtil from './src/utils/FirebaseUtil'; 


const App = () => {
  return (
    <LoginProvider>
      <Routes />
    </LoginProvider>
  );
};

export default App;
