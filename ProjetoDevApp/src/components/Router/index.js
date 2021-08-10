import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Router = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor="#88c9bf" />
      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => navigation.navigate('UserRegister')}>
        User Registration
      </Button>
      <Button
        mode="contained"
        style={styles.animalRegisterButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => navigation.navigate('AnimalRegister')}>
        AnimalRegistration
      </Button>
      <Button
        mode="contained"
        style={styles.animalRegisterButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => navigation.navigate('AnimalRegister2')}>
        AnimalRegistration2
      </Button>
    </View>
  );
};

export default Router;
