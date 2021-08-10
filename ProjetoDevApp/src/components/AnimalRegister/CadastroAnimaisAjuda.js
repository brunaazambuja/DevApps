import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import { CheckBox1} from './CheckBoxGroups';

export const CadastroAnimaisAjudaCore = () => {
    const [medicamentosAnimal, setMedicamentosAnimal] = useState('');
    const [objetosAnimal, setObjetosAnimal] = useState('');

    return(
        <View>
            <Text style = {styles.text2}>
                Necessidades do Animal
            </Text>

            <CheckBox1
                name = 'Alimento'>
            </CheckBox1>

            <CheckBox1
                name = 'Auxílio Financeiro'>
            </CheckBox1>

            <CheckBox1
                name = 'Medicamento'>
            </CheckBox1>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {setMedicamentosAnimal}
                placeholder = 'Nome do Medicamento'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>

            <CheckBox1
                name = 'Objetos'>
            </CheckBox1>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {setObjetosAnimal}
                placeholder = 'Especifique o(s) objeto(s)'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    viewAjudar : {
        padding : 16
    },

    textAjudar : {
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