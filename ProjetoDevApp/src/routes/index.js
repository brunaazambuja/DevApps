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
        headerShown: true,
        headerStyle: {
          backgroundColor:"#cfe9e5"
        },
      }}>
      <App.Screen name="Home" component={Router} />
      <App.Screen name="Login" options={{headerStyle:{backgroundColor:"#cfe9e5"}}} component={UserLogin} />
      <App.Screen name="UserRegister" options={{headerStyle:{backgroundColor:"#cfe9e5"}}} component={UserRegister} />
      <App.Screen name="AnimalRegister" options={{headerStyle:{backgroundColor:"#fee29b"}, title:"Cadastro de Animais"}} component={Cadastro_Animais} />
      <App.Screen name="AnimalRegister2" options={{headerStyle:{backgroundColor:"#fee29b"}, title:"Cadastro de Animais"}} component={TelaFinalCadastroAnimais} />
    </App.Navigator>
  );
};

export default Routes;
