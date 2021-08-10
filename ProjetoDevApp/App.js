import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import UserRegister from './src/components/UserRegister';
import { Cadastro_Animais} from './src/components/AnimalRegister/cadastro_animais';
import { TelaFinalCadastroAnimais } from './src/components/AnimalRegister/CadastroAnimaisFinalizado';
const App = () => {
  return (
    <View>
      <TelaFinalCadastroAnimais>
        
      </TelaFinalCadastroAnimais>
    </View>
  );
};


export default App;
