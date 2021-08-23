import React, { useState } from 'react';
import {
  Container,
  InfoText,
  InfoContainer,
  TitleText,
  InputsContainer,
  Input,
  ButtonText,
  ButtonView,
} from './styles';
import Button from '../Button';
import { ScrollView, Text, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FirebaseUtil from '../../utils/FirebaseUtil';

const UserRegister = () => {
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [full_name, setFull_name] = useState('');
  const [user_name, setUser_name] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [adress, setAdress] = useState('');
  const [state, setState] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState('');

  const signUp = async () => {
    if (password === password_confirmation) {
      try {
        await FirebaseUtil.signUp(email, password);
        await FirebaseUtil.createUser(
          full_name,
          user_name,
          email,
          city,
          adress,
          state,
          age,
          phone,
        );
      } catch (e) {
        console.log(e.message);
        switch (e.code) {
          case 'auth/email-already-in-use':
            alert('Email já cadastrado');
            break;
          case 'auth/invalid-email':
            alert('Email com formato incorreto');
            break;
          default:
            alert(e.message);
        }
      }
    } else {
      alert('Confirmação de senha diferente de senha');
    }
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#88c9bf" />
      <Container>
        <InfoContainer>
          <InfoText>
            As informações preenchidas serão divulgadas apenas para a pessoa com
            a qual você realizar o processo de adoção e/ou apadrinhamento, após
            a formalização do processo.
          </InfoText>
        </InfoContainer>

        <InputsContainer>
          <TitleText>INFORMAÇÕES PESSOAIS</TitleText>
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={full_name => setFull_name(full_name)}
            placeholder="Nome Completo"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={age => setAge(age)}
            placeholder="Idade"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={email => setEmail(email)}
            placeholder="E-mail"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={state => setState(state)}
            placeholder="Estado"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={city => setCity(city)}
            placeholder="Cidade"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={adress => setAdress(adress)}
            placeholder="Endereço"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={phone => setPhone(phone)}
            placeholder="Telefone"
          />

          <TitleText>INFORMAÇÕES DE PERFIL</TitleText>
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={user_name => setUser_name(user_name)}
            placeholder="Nome do Usuário"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={password => setPassword(password)}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={password_confirmation =>
              setPassword_confirmation(password_confirmation)
            }
            placeholder="Confirmação de senha"
            secureTextEntry={true}
          />

          <TitleText>FOTO DE PERFIL</TitleText>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              backgroundColor: '#e6e7e7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 180,
              height: 180,
              elevation: 5,
            }}>
            <Icon
              name="plus-circle"
              style={{
                color: '#757575',
                fontSize: 25,
              }}
            />
            <Text style={{ fontSize: 16, color: '#757575' }}>
              adicionar foto
            </Text>
          </TouchableOpacity>
          <Button onPress={() => signUp()}>FAZER CADASTRO</Button>
        </InputsContainer>
      </Container>
    </ScrollView>
  );
};

export default UserRegister;
