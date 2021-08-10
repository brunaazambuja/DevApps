import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import UserRegister from '../components/UserRegister';
import Cadastro_Animais from '../components/AnimalRegister/cadastro_animais';
import TelaFinalCadastroAnimais from '../components/AnimalRegister/CadastroAnimaisFinalizado';
import UserLogin from '../components/UserLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from '../components/Router';

const App = createNativeStackNavigator();

const Routes = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}>
      <App.Screen name="Router" component={Router} />
      <App.Screen name="Login" component={UserLogin} />
      <App.Screen name="UserRegister" component={UserRegister} />
      <App.Screen name="AnimalRegister" component={Cadastro_Animais} />
      <App.Screen name="AnimalRegister2" component={TelaFinalCadastroAnimais} />
    </App.Navigator>
  );
};

export default Routes;
