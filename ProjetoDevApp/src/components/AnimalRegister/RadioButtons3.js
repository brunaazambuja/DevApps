import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper'

export const Radio_Buttons_3 = (props) => {
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);
    const [b3, setB3] = useState(false);

    const pressB1 = () => {
        setB2(false);
        setB3(false);
        setB1(!b1);
        props.setNames(props.enum1);
    }

    const pressB2 = () => {
        setB1(false);
        setB3(false);
        setB2(!b2);
        props.setNames(props.enum2);
    }

    const pressB3 = () => {
        setB1(false);
        setB2(false);
        setB3(!b3);
        props.setNames(props.enum3);
    }

    return(
        <View style = {styles.radioBurron3Style}>
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
            <View style = {styles.radioStyle}>
                <RadioButton
                    status = {b3 ? 'checked' : 'unchecked'}
                    onPress = {pressB3}>
                </RadioButton>
                <View style = {styles.viewtextStyle}>
                    <Text>{props.name3}</Text>   
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    radioBurron3Style : {
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