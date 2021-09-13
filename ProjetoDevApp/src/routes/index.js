import React, { useContext } from 'react';

import UserRegister from '../components/UserRegister';
import Cadastro_Animais from '../components/AnimalRegister/cadastro_animais';
import TelaFinalCadastroAnimais from '../components/AnimalRegister/CadastroAnimaisFinalizado';
import UserLogin from '../components/UserLogin';
import LoginOrRegister from '../components/LoginOrRegister';
import Router from '../components/Router';
import AvailableAnimals from '../components/AvailableAnimals';
import AnimalProfile from '../components/AnimalProfile';

import { LoginContext } from '../utils/LoginProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = createNativeStackNavigator();

const Routes = () => {
  const user = useContext(LoginContext);
  return (
    <NavigationContainer>
      <App.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#cfe9e5',
          },
        }}>
        {user ? (
          <>
            <App.Screen name="Home" component={Router} />
            <App.Screen
              name="AnimalRegister"
              options={{
                headerStyle: { backgroundColor: '#fee29b' },
                title: 'Cadastro de Animais',
              }}
              component={Cadastro_Animais}
            />
            <App.Screen
              name="AnimalRegister2"
              options={{
                headerStyle: { backgroundColor: '#fee29b' },
                title: 'Cadastro de Animais',
              }}
              component={TelaFinalCadastroAnimais}
            />
            <App.Screen
              name="AvailableAnimals"
              options={{
                headerStyle: { backgroundColor: '#ffd358'},
                title: 'Animais Disponíveis'
              }}
              component={AvailableAnimals}
            />
            <App.Screen
              name="AnimalProfile"
              options={{
                headerStyle: { backgroundColor: '#ffd358'},
                title: 'Perfil do Animal'
              }}
              component={AnimalProfile}
            />
          </>
        ) : (
          <>
            <App.Screen
              name="LoginOrRegister"
              options={{
                headerStyle: { backgroundColor: '#88c9bf' },
                title: 'Cadastro',
                headerTitleStyle: { color: '#434343' },
              }}
              component={LoginOrRegister}
            />
            <App.Screen
              name="UserLogin"
              options={{ headerStyle: { backgroundColor: '#cfe9e5' } }}
              component={UserLogin}
            />
            <App.Screen
              name="UserRegister"
              options={{
                headerStyle: { backgroundColor: '#cfe9e5' },
                title: 'Cadastro',
                headerTitleStyle: { color: '#434343' },
              }}
              component={UserRegister}
            />
          </>
        )}
      </App.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
