import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import { Cadastro_Animais_Adocao } from './CadastroAnimaisAdocao';
import { Cadastro_Animais_Apadrinhar } from './CadastroAnimaisApadrinhar';
import { Cadastro_Animais_Ajuda } from './CadastroAnimaisAjuda';
import {TopBar} from './TopBar';

export const Cadastro_Animais = () => {
    const [ajuda, setAjuda] = useState(false);
    const [adocao, setAdocao] = useState(false);
    const [apad, setApad] = useState(false);

    const ajudaPress = () => setAjuda(!ajuda);
    const adocaoPress = () => {
        setApad(false);
        setAdocao(!adocao);
    }
    const apadPress = () => {
        setAdocao(false);
        setApad(!apad);
    }

    return(
        <ScrollView> 
            <TopBar title = {'Cadastro de Animais'}>
            </TopBar>
            <Text style = {styles.text1}>
                Tenho interesse em cadastrar o animal para:
            </Text>
            <View style = {styles.threeButtonsStyle}>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity 
                        style = {styles.touchableStyle2}
                        onPress = {adocaoPress}>
                        <Text style = {styles.textStyle}> Adoção </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity 
                        style = {styles.touchableStyle2}
                        onPress = {apadPress}>
                        <Text style = {styles.textStyle}> Apadrinhar</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.touchableStyle}>
                    <TouchableOpacity 
                        style = {styles.touchableStyle2}
                        onPress = {ajudaPress}>
                        <Text style = {styles.textStyle}> Ajuda </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {adocao ? <Cadastro_Animais_Adocao></Cadastro_Animais_Adocao> : null}
            {apad ? <Cadastro_Animais_Apadrinhar></Cadastro_Animais_Apadrinhar> : null}
            {ajuda ? <Cadastro_Animais_Ajuda></Cadastro_Animais_Ajuda> : null}
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