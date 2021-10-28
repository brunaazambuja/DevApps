import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useEffect } from 'react';
import FirebaseUtil from '../../utils/FirebaseUtil';
import PressableButton from '../PressableButton/PressableButton';

const UserProfile = () => {
  const [image, setImage] = useState();
  const [userName, setUserName] = useState('');
  const userID = FirebaseUtil.getLoggedUser().uid;

  const signOut = () => {
    FirebaseUtil.signOut().catch(e => {
      console.log(e);
      alert('Algo deu errado');
    });
  };

  useEffect(() => {
    FirebaseUtil.getUserImage(userID).then(image => {
      setImage(image);
    });
    FirebaseUtil.getNameUser(userID).then(setUserName);
  }, []);

  return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          margin: 100,
        }}>
        <Image
          source={{ uri: image }}
          style={{ height: 200, width: 200, borderRadius: 100 }}></Image>
        <Text style={{ marginTop: 10, fontSize: 32 }}>{userName}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginBottom: 30,
        }}>
        <PressableButton
          style={{
            backgroundColor: '#ffd358',
            alignSelf: 'center',
            height: 54,
            width: 280,
            elevation: 5,
            borderRadius: 10,
          }}
          onPress={() => signOut()}>
          <Text
            style={{
              color: '#434343',
              fontSize: 16,
              fontWeight: 'normal',
            }}>
            Sair
          </Text>
        </PressableButton>
      </View>
    </View>
  );
};

export default UserProfile;
