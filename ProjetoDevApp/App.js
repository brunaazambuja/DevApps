import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import UserRegister from './src/components/UserRegister';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <UserRegister />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
