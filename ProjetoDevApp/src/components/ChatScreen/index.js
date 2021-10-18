import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseUtil from '../../utils/FirebaseUtil';

const Chat = ({route}) => {
    const [messages, setMessages] = useState([]);
    const userID = FirebaseUtil.getLoggedUser().uid;

    useLayoutEffect(() => {
        FirebaseUtil.getMessages(route.params.user, route.params.talker, route.params.animal).then(arrayMessages => {
            setMessages(arrayMessages);
        });
    }, []);

    const onSend = (messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        let m = messages[0];
        FirebaseUtil.addMessage(m, userID, route.params.talker, route.params.animal);
    };

    return (
        /*<View>
            <Text>{messages.length}</Text>
            <Text>{route.params.sender}</Text>
        </View>*/
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: userID
            }}
        />
    );
}

export default Chat;