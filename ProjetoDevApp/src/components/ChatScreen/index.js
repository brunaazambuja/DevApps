import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from '../../utils/FirebaseUtil';

const Chat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState('');
  const userID = FirebaseUtil.getLoggedUser().uid;

  useLayoutEffect(() => {
    FirebaseUtil.getUserImage(userID).then(image => {
      setImage(image);
    });
  }, []);

  useLayoutEffect(() => {
    const {subscriber1, subscriber2} = FirebaseUtil.getMessagesListener(
      route.params.user,
      route.params.talker,
      route.params.animal,
      setMessages,
    );
    return () => {
      subscriber1();
      subscriber2();
    };
  }, []);

  const onSend = (messages = []) => {
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, messages),
    // );
    let m = messages[0];
    FirebaseUtil.addMessage(
      m,
      userID,
      route.params.talker,
      route.params.animal,
    );
  };

  return (
    /*<View>
            <Text>{messages.length}</Text>
            <Text>{image}</Text>
        </View>*/
    <GiftedChat
      messages={messages}
      messagesContainerStyle={{ backgroundColor: 'white' }}
      showAvatarForEveryMessage={true}
      textInputProps={{ style: { color: 'black', flex: 1 } }}
      onSend={messages => onSend(messages)}
      user={{
        _id: userID,
        avatar: image,
      }}
    />
  );
};

export default Chat;
