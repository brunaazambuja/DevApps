import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const TopBar = (props) => {
    const [tButton, setTButton] = useState(false);

    const arrowPress = () => setTButton(!tButton);

    return(
        <View 
            style = {styles.topBarStyle}>
            <TouchableOpacity 
                style = {styles.touchableStyle}
                onPress = {arrowPress}>
                <Icon
                    style = {styles.arrowStyle}
                    name = 'arrow-left'>

                </Icon> 
            </TouchableOpacity>
            <Text style = {styles.textTopBarStyle}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topBarStyle : {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: '#ffd358',
        alignItems: 'center'
    },

    textTopBarStyle : {
        fontSize : 20,
        color : '#434343',
        paddingHorizontal : 20
    },

    touchableStyle : {
        padding : 10
    },

    arrowStyle : {
        fontSize : 24,
        color : '#757575'
    }
})