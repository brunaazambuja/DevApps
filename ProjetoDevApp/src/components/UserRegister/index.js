import React from 'react';
import { TextInput } from 'react-native';
import { Container, InfoText, InfoContainer, TitleText, InputsContainer } from './styles';

const UserRegister = () => (
  <Container>
      <InfoContainer>
        <InfoText>
        As informações preenchidas serão divulgadas apenas para a pessoa com a qual
        você realizar o processo de adoção e/ou apadrinhamento, após a formalização do processo.
        </InfoText>
      </InfoContainer>

      <InputsContainer>
        <TitleText>
          INFORMAÇÕES PESSOAIS
        </TitleText>
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Nome Completo"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Idade"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="E-mail"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Estado"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Cidade"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Endereço"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Telefone"
        />

        <TitleText>
          INFORMAÇÕES DE PERFIL
        </TitleText>

        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Nome do Usuário"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Senha"
        />
        <TextInput
          placeholderTextColor="#bdbdbd"
          placeholder="Confirmação de senha"
        />

        <TitleText>
          FOTO DE PERFIL
        </TitleText>
      </InputsContainer>
  </Container>
);

export default UserRegister;
