import React, { useState } from 'react';
import { ScrollView, Text, StatusBar, View } from 'react-native';
import FirebaseUtil from '../../utils/FirebaseUtil';
import PressableButton from '../PressableButton/PressableButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Quando a tela de notificações abrir, o hook se inscreve para receber updates
  // quando ela perder o foco, desinscreve
  useFocusEffect(
    React.useCallback(() => {
      const user = FirebaseUtil.getLoggedUser();
      const subscriber = FirebaseUtil.getAdoptionNotification(
        user,
        setNotifications,
      );
      return () => subscriber();
    }, []),
  );

  return (
    <>
      <StatusBar backgroundColor="#f7a800" />
      {notifications.length > 0 ? (
        <>
          <ScrollView style={styles.scrollViewStyle}>
            {notifications.map((notification, i) => (
              <NotificationCard notification_data={notification} key={i} />
            ))}
            <View style={{ height: 30 }}></View>
          </ScrollView>
        </>
      ) : (
        <View style={styles.viewNoNotifications}>
          <Text style={styles.textNoNotifications}>
            Você não possui notificações!
          </Text>
        </View>
      )}
    </>
  );
};

const NotificationCard = ({ notification_data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationCardView}>
      <Text style={{ color: '#434343', fontSize: 18 }}>
        {notification_data.message}
      </Text>
      <Text style={{ color: '#434343' }}> {notification_data.sender} </Text>

      {notification_data.type == 'request' ? (
        <View style={{ flexDirection: 'row' }}>
          <PressableButton
            style={styles.acceptButton}
            onPress={() => {
              FirebaseUtil.adoptionAcceptance(notification_data);
            }}>
            <Text style={styles.buttonText}>Aceitar</Text>
          </PressableButton>
          <PressableButton
            style={styles.rejectButton}
            onPress={() => {
              FirebaseUtil.adoptionRejection(notification_data);
            }}>
            <Text style={styles.buttonText}>Negar</Text>
          </PressableButton>
          <PressableButton
            style={styles.acceptButton}
            onPress={() => {
              navigation.navigate('Chat', {receiver: notification_data.receiver, sender: notification_data.sender_uid});
            }}>
            <Text style={styles.buttonText}>Chat</Text>
          </PressableButton>
        </View>
      ) : (
        <PressableButton
          style={styles.okButton}
          onPress={() => {
            FirebaseUtil.deleteNotification(notification_data.id);
          }}>
          <Text style={styles.buttonText}>Ok</Text>
        </PressableButton>
      )}
    </View>
  );
};

export default Notifications;
