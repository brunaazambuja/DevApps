import React from 'react';

import { Container, InfoText, InfoContainer, TitleText,
  InputsContainer, Input, ButtonFile, ButtonText, ButtonView, Icon } from './styles';
import Button from '../Button';


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
        <Input placeholderTextColor="#bdbdbd" placeholder="Nome Completo"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Idade"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="E-mail"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Estado"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Cidade"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Endereço"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Telefone"/>

        <TitleText>
          INFORMAÇÕES DE PERFIL
        </TitleText>
        <Input placeholderTextColor="#bdbdbd" placeholder="Nome do Usuário"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Senha"/>
        <Input placeholderTextColor="#bdbdbd" placeholder="Confirmação de senha"/>

        <TitleText>
          FOTO DE PERFIL
        </TitleText>
          <ButtonFile >
            <ButtonView>
              {/* <Icon
                name="plus-circle"
                size={20}
                color="#757575"
              /> */}
              <ButtonText>adicionar foto</ButtonText>
            </ButtonView>
          </ButtonFile>

        <Button>FAZER CADASTRO</Button>
      </InputsContainer>
  </Container>
);


export default UserRegister;
