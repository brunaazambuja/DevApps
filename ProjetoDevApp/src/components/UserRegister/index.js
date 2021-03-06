import React, { useState } from 'react';
import {
  Container,
  InfoText,
  InfoContainer,
  TitleText,
  InputsContainer,
  Input,
} from './styles';
import Button from '../Button';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FirebaseUtil from '../../utils/FirebaseUtil';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary, launchImageCamera } from '../../utils/ImageUtil';
import { Menu, Provider} from 'react-native-paper';

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

  const [image, setImage] = useState(null);
  const [visible, setVisible] = useState(false);

  const galeryOption = () => {
    launchImageLibrary(setImage);
    setVisible(false);
  };

  const cameraOption = () => {
    launchImageCamera(setImage);
    setVisible(false);
  };

  const signUp = async () => {
    if (password === password_confirmation) {
      try {
        await FirebaseUtil.signUp(email, password);

        const { uri } = image;
        const uploadUri =
          Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const storageRef = storage().ref('users/' + filename);
        // Precisamos esperar o upload para colocar a url da imagem no firestore
        await storageRef.putFile(uploadUri);
        const user_image_url = await storageRef.getDownloadURL();

        await FirebaseUtil.createUser(
          full_name,
          user_name,
          email,
          city,
          adress,
          state,
          age,
          phone,
          user_image_url,
        );
      } catch (e) {
        console.log(e.message);
        switch (e.code) {
          case 'auth/email-already-in-use':
            alert('Email j?? cadastrado');
            break;
          case 'auth/invalid-email':
            alert('Email com formato incorreto');
            break;
          case 'storage/object-not-found':
            alert('Arquivo n??o existe');
            break;
          case 'storage/unauthorized':
            alert('Sem autoriza????o para upload de imagem');
            break;
          case 'storage/canceled':
            alert('Usu??rio cancelou o upload');
            break;
          default:
            alert(e.message);
        }
      }
    } else {
      alert('Confirma????o de senha diferente de senha');
    }
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#88c9bf" />
      <Container>
        <InfoContainer>
          <InfoText>
            As informa????es preenchidas ser??o divulgadas apenas para a pessoa com
            a qual voc?? realizar o processo de ado????o e/ou apadrinhamento, ap??s
            a formaliza????o do processo.
          </InfoText>
        </InfoContainer>

        <InputsContainer>
          <TitleText>INFORMA????ES PESSOAIS</TitleText>
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
            placeholder="Endere??o"
          />
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={phone => setPhone(phone)}
            placeholder="Telefone"
          />

          <TitleText>INFORMA????ES DE PERFIL</TitleText>
          <Input
            placeholderTextColor="#bdbdbd"
            onChangeText={user_name => setUser_name(user_name)}
            placeholder="Nome do Usu??rio"
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
            placeholder="Confirma????o de senha"
            secureTextEntry={true}
          />

          <TitleText>FOTO DE PERFIL</TitleText>

          <Provider>
            <View>
              <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <TouchableOpacity
                      onPress={() => setVisible(true)}
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
                      {image ? (
                        <View
                          style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={{ uri: image.uri }}
                            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                          />
                          <Icon
                            name="plus-circle"
                            style={{
                              color: '#757575',
                              fontSize: 25,
                              opacity: 0.5,
                              position: 'absolute',
                              alignSelf: 'center',
                            }}
                          />
                        </View>
                      ) : (
                        <>
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
                        </>
                      )}
                    </TouchableOpacity>}>
                  <Menu.Item onPress={() => galeryOption()} title="Pegar foto da galeria" />
                  <Menu.Item onPress={() => cameraOption()} title="Pegar foto da c??mera" />
              </Menu>
            </View>
          </Provider>

          <Button onPress={() => signUp()}>FAZER CADASTRO</Button>
        </InputsContainer>
      </Container>
    </ScrollView>
  );
};

export default UserRegister;
