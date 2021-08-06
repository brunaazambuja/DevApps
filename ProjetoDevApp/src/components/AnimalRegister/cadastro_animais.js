import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity,} from 'react-native';
import {TopBar} from './TopBar';

export const Cadastro_Animais_1_1 = () => {
    return(
        <ScrollView> 
            <TopBar title = {'Cadastro de Animais'}>
            </TopBar>
            <Text style = {styles.text1}>
                Tenho interesse em cadastrar o animal para:
            </Text>
            <View style = {styles.threeButtonsStyle}>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity style = {styles.touchableStyle2}>
                        <Text style = {styles.textStyle}> Adoção </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity style = {styles.touchableStyle2}>
                        <Text style = {styles.textStyle}> Apadrinhar</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity style = {styles.touchableStyle2}>
                        <Text style = {styles.textStyle}> Ajuda </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text1 : {
        fontSize : 14,
        alignSelf : 'baseline',
        color : '#757575',
        padding : 16
    },

    threeButtonsStyle : {
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingLeft : 10,
        paddingRight : 10 
    },

    touchableStyle : {
        width : 130,
        paddingHorizontal : 4
    },
    touchableStyle2 : {
        height : 30,
        backgroundColor : '#ffd358'
    },
    textStyle : {
        paddingTop : 5,
        alignSelf : 'center',
        fontSize : 12,
        color : '#434343'
    }
})