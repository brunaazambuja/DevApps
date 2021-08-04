import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { Container } from './styles';

const UserRegister = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container><Text>oie</Text></Container>
    </ScrollView>
  </SafeAreaView>
);

export default UserRegister;
