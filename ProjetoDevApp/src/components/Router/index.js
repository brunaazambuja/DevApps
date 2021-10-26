import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { LoginContext } from '../../utils/LoginProvider';
import FirebaseUtil from '../../utils/FirebaseUtil';
import PressableButton from '../PressableButton/PressableButton';

const Router = () => {
  const navigation = useNavigation();
  const user = useContext(LoginContext);
  const [userName, setUserName] = useState('Null');

  useEffect(async () => {
    const userName = await FirebaseUtil.getNameUser(user.uid);
    setUserName(userName);
  }, []);

  const signOut = () => {
    FirebaseUtil.signOut().catch(e => {
      console.log(e);
      alert('Algo deu errado');
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="#88c9bf" />
      <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16 }}>
        Bem vindo {userName}
      </Text>
      <PressableButton
        style={styles.animalRegisterButton}
        onPress={() => navigation.navigate('AnimalRegister')}>
        <Text style={styles.buttonText}>Cadastro de Animais</Text>
      </PressableButton>
      <PressableButton
        style={styles.animalRegisterButton}
        onPress={() => navigation.navigate('AvailableAnimals')}>
        <Text style={styles.buttonText}>Animais Disponíveis</Text>
      </PressableButton>
      <PressableButton
        style={styles.animalRegisterButton}
        onPress={() => navigation.navigate('MyAnimals')}>
        <Text style={styles.buttonText}>Meus Animais</Text>
      </PressableButton>
      <PressableButton
        style={styles.animalRegisterButton}
        onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.buttonText}>Notificações</Text>
      </PressableButton>
      <PressableButton style={styles.logoutButton} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Logout</Text>
      </PressableButton>
    </View>
  );
};

export default Router;
