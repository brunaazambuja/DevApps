import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { CheckBox1, CheckBox1_3_Choice} from './CheckBoxGroups';

export const CadastroAnimaisAdocaoCore = () => {
    return(
        <View>
            <Text style = {styles.text2}>
                Exigências Para Adoção
            </Text>

            <CheckBox1
                name = 'Termo de adoção'>
            </CheckBox1>
            <CheckBox1
                name = 'Fotos da casa'>
            </CheckBox1>
            <CheckBox1
                name = 'Visita prévia ao animal'>
            </CheckBox1>
            <CheckBox1_3_Choice
                name = 'Acompanhamento pós adoção'
                name1 = '1 mês'
                name2 = '3 meses'
                name3 = '6 meses'>
            </CheckBox1_3_Choice>
        </View>
    )
}

const styles = StyleSheet.create({
    text2 : {
        fontSize : 12,
        color : '#f7a800',
        paddingVertical : 20
    },

    textAdocao : {
        fontSize : 16,
        color : '#434343'
    },
    
    viewAdocao : {
        padding : 16
    },

    touchableStyle2 : {
        height : 30,
        backgroundColor : '#ffd358'
    },

    touchableStyle3 : {
        width : 180,
        paddingVertical : 10,
        alignSelf : 'center'
    },

    textStyle : {
        paddingTop : 5,
        alignSelf : 'center',
        fontSize : 12,
        color : '#434343'
    },

    inputStyle : {
        fontSize : 14,
        color : '#434343'
    }
})