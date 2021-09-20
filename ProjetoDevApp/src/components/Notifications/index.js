import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
} from 'react-native';
import FirebaseUtil from '../../utils/FirebaseUtil';
import { styles } from './styles';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [sender, SetSender] = useState(null);

  useEffect(() => {
    const user = FirebaseUtil.getLoggedUser();
    FirebaseUtil.getAdoptionNotification(user).then(notifications => setNotifications(notifications));
  }, []);

  return (
      <>
      {notifications.length > 0 ? (
      <>
        <StatusBar backgroundColor="#f7a800" />
        <ScrollView style={styles.scrollViewStyle}>
          {notifications.map((notification, i) => (
            <NotificationCard
              notification_data={notification}
              key={i}></NotificationCard>
          ))}
          <View style={{ height: 30 }}></View>
        </ScrollView>
      </>
      ) : (
        <Text style={styles.textNoNotifications}> Nenhuma notificação cadastrada! </Text>
      )}
      </>
  );
};

const NotificationCard = ({ notification_data }) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacityStyle} >
      <View style={styles.topBarStyle}>
        <Text style={styles.textTopBarStyle}> {notification_data.message} </Text>
        <Text style={styles.textTopBarStyle}> {notification_data.sender} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Notifications;
