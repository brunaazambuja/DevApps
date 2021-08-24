import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PressableButton from '../PressableButton/PressableButton';

const TelaFinalCadastroAnimais = () => {
    const [tButton, setTButton] = useState(false);
    const navigation = useNavigation();

    const tButtonPress = () => {
        setTButton(!tButton);
        navigation.navigate('Home');
    };

    return(
        <View style={{flex:1, alignItems:'center'}}>
            <StatusBar backgroundColor="#ffd358" />

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
                    <PressableButton 
                        style = {styles.touchableStyle2}
                        onPress = {tButtonPress}>
                        <Text style = {styles.textStyle2}> Meus Pets </Text>
                    </PressableButton>
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
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },

    touchableStyle2 : {
        height: 54,
        backgroundColor : '#ffd358',
        width: 280,
        elevation: 5,
    },

    textStyle2 : {
        paddingTop : 5,
        alignSelf : 'center',
        fontSize : 16,
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
