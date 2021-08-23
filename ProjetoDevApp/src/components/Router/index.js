import React, { useContext } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { LoginContext } from '../../utils/LoginProvider';
import FirebaseUtil from '../../utils/FirebaseUtil';

const Router = () => {
  const navigation = useNavigation();
  const user = useContext(LoginContext);

  const signOut = () => {
    FirebaseUtil.signOut().catch(e => {
      console.log(e);
      alert('Algo deu errado');
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="#88c9bf" />
      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => signOut()}>
        Logout
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
