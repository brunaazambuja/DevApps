import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import PressableButton from '../PressableButton/PressableButton';
import { styles } from './styles';

const LoginOrRegister = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor="#589b9b" />

      <View style={{ paddingTop: 58, alignItems: 'center' }}>
        <Image
          source={require('../../assets/Meau_marca_2.png')}
          style={{ height: 100, resizeMode: 'contain' }}
        />
      </View>

      <Text style={styles.normalText}>
        Você precisa de uma conta para utilizar o App
      </Text>

      <PressableButton
        style={styles.button}
        onPress={() => navigation.navigate('UserRegister')}>
        <Text style={styles.buttonText}>Fazer cadastro</Text>
      </PressableButton>

      <Text style={styles.normalText}>Já possui cadastro?</Text>

      <PressableButton
        style={styles.button}
        onPress={() => navigation.navigate('UserLogin')}>
        <Text style={styles.buttonText}>Fazer login</Text>
      </PressableButton>

      <Text style={styles.normalText}>Créditos</Text>

      <PressableButton
        style={styles.button}
        onPress={() => navigation.navigate('Credits')}>
        <Text style={styles.buttonText}>Créditos</Text>
      </PressableButton>

      <View style={{ height: 58 }} />
    </View>
  );
};

export default LoginOrRegister;
