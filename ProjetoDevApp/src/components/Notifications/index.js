import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StatusBar, View } from 'react-native';
import FirebaseUtil from '../../utils/FirebaseUtil';
import PressableButton from '../PressableButton/PressableButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [chatNotifications, setChatNotifications] = useState([]);

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

  useEffect(() => {
    let mounted = true;
    const user = FirebaseUtil.getLoggedUser();
    FirebaseUtil.getSenderNotifictifications(user.uid).then(chats => {
      if (mounted) setChatNotifications(chats);
    });
    return () => (mounted = false);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#f7a800" />
      <ScrollView>
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
          <></>
        )}
        {chatNotifications.length > 0 ? (
          <>
            <ScrollView style={styles.scrollViewStyle}>
              {chatNotifications.map((chat, i) => (
                <ChatCard chat_data={chat} key={i} />
              ))}
              <View style={{ height: 30 }}></View>
            </ScrollView>
          </>
        ) : (
          <></>
        )}
        {notifications.length === 0 && chatNotifications.length === 0 ? (
          <View style={styles.viewNoNotifications}>
            <Text style={styles.textNoNotifications}>
              Você não possui notificações!
            </Text>
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
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
            style={styles.chatButton}
            onPress={async () => {
              const talker_name = await FirebaseUtil.getNameUser(
                notification_data.sender_uid,
              );
              navigation.navigate('Chat', {
                user: notification_data.receiver,
                talker: notification_data.sender_uid,
                talker_name,
                animal: notification_data.animal_id,
              });
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

const ChatCard = ({ chat_data }) => {
  const navigation = useNavigation();
  const [talker_name, setTalker_name] = useState('');

  useEffect(() => {
    FirebaseUtil.getNameUser(chat_data.receiver).then(setTalker_name);
  }, [chat_data]);

  return (
    <View style={styles.notificationCardView}>
      <Text>Chat com {talker_name}</Text>
      <PressableButton
        style={styles.chatButton}
        onPress={async () => {
          navigation.navigate('Chat', {
            user: chat_data.sender,
            talker: chat_data.receiver,
            talker_name,
            animal: chat_data.animal,
          });
        }}>
        <Text style={styles.buttonText}>Chat</Text>
      </PressableButton>
    </View>
  );
};

export default Notifications;
