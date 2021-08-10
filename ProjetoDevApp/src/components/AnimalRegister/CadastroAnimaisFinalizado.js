import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { TopBar } from './TopBar';

const TelaFinalCadastroAnimais = () => {
    const [tButton, setTButton] = useState(false);

    const tButtonPress = () => setTButton(!tButton);

    return(
        <View>
            <StatusBar backgroundColor="#ffd358" />
            <TopBar title = 'Cadastro Do Animal'></TopBar>

            <Text style = {styles.ebaStyle}> Eba! </Text>

            <Text
                style = {styles.textStyle}>
                O cadastro do seu pet foi realizado com sucesso!
            </Text>

            <Text
                style = {styles.textStyle}>
                Certifique-se que permitiu o envio de notificações por push no campo privacidade do menu configurações do aplicativo. Assim, 
                podemos te avisar assim que  alguém interessado entrar em contato!
            </Text>

            <View style = {styles.touchableStyle}>
                    <TouchableOpacity 
                        style = {styles.touchableStyle2}
                        onPress = {tButtonPress}>
                        <Text style = {styles.textStyle2}> Meus Pets </Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 14,
        color : '#757575',
        alignSelf : 'center',
        paddingHorizontal : 52,
        paddingBottom : 10,
        textAlign : 'center'
    },

    touchableStyle : {
        width : 180,
        paddingVertical : 10,
        alignSelf : 'center',
        position : 'absolute',
        bottom : 0,
        top : 600
    },

    touchableStyle2 : {
        height : 30,
        backgroundColor : '#ffd358'
    },

    textStyle2 : {
        paddingTop : 5,
        alignSelf : 'center',
        fontSize : 12,
        color : '#434343'
    },

    ebaStyle : {
        alignSelf : 'center',
        paddingVertical : 52,
        fontSize : 53,
        color : '#ffd358'
    }
})

export default TelaFinalCadastroAnimais;
