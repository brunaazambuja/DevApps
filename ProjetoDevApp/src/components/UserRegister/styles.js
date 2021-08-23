import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  padding: 16px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #434343;
`;

export const InfoContainer = styled.View`
  background-color: #cfe9e5;
  padding: 4px;
  border-radius: 4px;
`;

export const TitleText = styled.Text`
  padding: 30px 0 10px 0;
  color: #88c9bf;
`;

export const InputsContainer = styled.View`
  padding: 24px 12px;
`;

export const Input = styled.TextInput`
  border-bottom-color: #e6e7e8;
  border-bottom-width: 1px;
`;

export const ButtonFile = styled.TouchableOpacity`
  height: 128px;
  width: 128px;
  margin: 32px auto;
  background-color: #e6e7e7;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  color: #757575;
  font-size: 14px;
`;

export const ButtonView = styled.View`
  margin: auto;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  color: #434343;
  background-color: #88c9bf;
  margin-top: 32px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

