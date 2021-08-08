import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper'

export const Radio_Buttons_2 = (props) => {
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);

    const pressB1 = () => {
        setB2(false);
        setB1(!b1);
    }

    const pressB2 = () => {
        setB1(false);
        setB2(!b2);
    }

    return(
        <View style = {styles.radioBurron2Style}>
            <View style = {styles.radioStyle}>
                <RadioButton
                    status = {b1 ? 'checked' : 'unchecked'}
                    onPress = {pressB1}>
                </RadioButton>
                <View style = {styles.viewtextStyle}>
                    <Text>{props.name1}</Text>   
                </View>
            </View>
            <View style = {styles.radioStyle}>
                <RadioButton
                    status = {b2 ? 'checked' : 'unchecked'}
                    onPress = {pressB2}>
                </RadioButton>
                <View style = {styles.viewtextStyle}>
                    <Text>{props.name2}</Text>   
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    radioBurron2Style : {
        alignSelf : 'baseline',
        flexDirection : 'row'
    },

    radioStyle : {
        width : 130,
        flexDirection : 'row'
    },
    viewtextStyle : {
        paddingTop : 8
    }
})