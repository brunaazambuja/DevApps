import React, { useState } from 'react';
import { View, TextInput, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import FirebaseUtil from '../../utils/FirebaseUtil';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e => {
      console.log(e);
      alert('Email e/ou senha inválidos');
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="#88c9bf" />

      <View style={{ paddingTop: 64 }}>
        <TextInput
          placeholder="Nome de usuário"
          placeholderTextColor="#bdbdbd"
          defaultValue={email}
          style={styles.inputField}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#bdbdbd"
          defaultValue={password}
          secureTextEntry={true}
          style={styles.inputField}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <View style={{ height: 58 }} />

      <Button
        mode="contained"
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        contentStyle={styles.loginButtonContent}
        onPress={() => signIn()}>
        ENTRAR
      </Button>
      <View style={{ height: 58 }} />
      <Button
        mode="contained"
        style={styles.facebookButton}
        contentStyle={styles.loginButtonContent}
        icon="facebook"
        onPress={() => {}}>
        Entrar com facebook
      </Button>
      <Button
        mode="contained"
        style={styles.googleButton}
        contentStyle={styles.loginButtonContent}
        icon="google"
        onPress={() => {}}>
        Entrar com google
      </Button>
    </View>
  );
};

export default UserLogin;
