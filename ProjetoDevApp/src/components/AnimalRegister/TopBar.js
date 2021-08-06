import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const TopBar = (props) => {
    return(
        <View 
            style = {styles.topBarStyle}>
            <Text>
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
        color : '#434343'
    }
})