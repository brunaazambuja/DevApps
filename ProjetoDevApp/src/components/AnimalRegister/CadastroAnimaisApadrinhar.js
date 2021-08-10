import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { CheckBox1, CheckBox1_3} from './CheckBoxGroups';

export const CadastroAnimaisApadrinharCore = () => {
    return(
        <View>
            <Text style = {styles.text2}>
                Exigências para Apadrinhamento
            </Text>

            <CheckBox1
                name = 'Termo de Apadrinhamento'>
            </CheckBox1>

            <CheckBox1_3
                name = 'Auxílio financeiro'
                name1 = 'Alimentação'
                name2 = 'Saúde'
                name3 = 'Objetos'>
            </CheckBox1_3>

            <CheckBox1
                name = 'Visitas ao Animal'>
            </CheckBox1>
        </View>
    )
}

const styles = StyleSheet.create({
    viewApadrinhar : {
        padding : 16
    },

    textApadrinhar : {
        fontSize : 16,
        color : '#434343'
    }, 

    text2 : {
        fontSize : 12,
        color : '#f7a800',
        paddingVertical : 20
    },

    inputStyle : {
        fontSize : 14,
        color : '#434343'
    },
    touchableStyle2 : {
        height : 30,
        backgroundColor : '#ffd358',
    },

    touchableStyle3 : {
        width : 180,
        paddingVertical : 10,
        alignSelf : 'center',
    },
    textStyle : {
        paddingTop : 5,
        alignSelf : 'center',
        fontSize : 12,
        color : '#434343'
    }
})