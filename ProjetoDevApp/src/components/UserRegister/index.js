import React from 'react';
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
import { ScrollView, Text, TouchableOpacity,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const UserRegister = () => (
  <ScrollView>
    <StatusBar backgroundColor="#88c9bf" />
    <Container>
      <InfoContainer>
        <InfoText>
          As informações preenchidas serão divulgadas apenas para a pessoa com a
          qual você realizar o processo de adoção e/ou apadrinhamento, após a
          formalização do processo.
        </InfoText>
      </InfoContainer>

      <InputsContainer>
        <TitleText>INFORMAÇÕES PESSOAIS</TitleText>
        <Input placeholderTextColor="#bdbdbd" placeholder="Nome Completo" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Idade" />
        <Input placeholderTextColor="#bdbdbd" placeholder="E-mail" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Estado" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Cidade" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Endereço" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Telefone" />

        <TitleText>INFORMAÇÕES DE PERFIL</TitleText>
        <Input placeholderTextColor="#bdbdbd" placeholder="Nome do Usuário" />
        <Input placeholderTextColor="#bdbdbd" placeholder="Senha" secureTextEntry={true} />
        <Input
          placeholderTextColor="#bdbdbd"
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
        }}
          >
          <Icon
            name="plus-circle"
            style={{
              color: '#757575',
              fontSize: 25,
            }}
          />
          <Text style={{ fontSize: 16, color: '#757575' }}>adicionar foto</Text>
        </TouchableOpacity>
        <Button>FAZER CADASTRO</Button>
      </InputsContainer>
    </Container>
  </ScrollView>
);


export default UserRegister;
