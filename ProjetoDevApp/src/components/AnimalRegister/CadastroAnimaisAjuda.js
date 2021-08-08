import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Radio_Buttons_3 } from './RadioButtons3';
import { Radio_Buttons_2 } from './RadioButtons2';
import { CheckBox1, CheckBox2 , CheckBox3, CheckBox1_3} from './CheckBoxGroups';

export const Cadastro_Animais_Ajuda = () => {
    const [nomeAnimal, setNomeAnimal] = useState('');
    const [doencaAnimal, setDoencaAnimal] = useState('');
    const [histAnimal, setHistAnimal] = useState('');
    const [medicamentosAnimal, setMedicamentosAnimal] = useState('');
    const [objetosAnimal, setObjetosAnimal] = useState('');

    const [ajudar, setAjudar] = useState(false);

    const ajudarPress = () => setAjudar(!ajudar);

    return(
        <View style = {styles.viewAjudar}>
            <Text style = {styles.textAjudar}>Ajudar</Text>

            <Text style = {styles.text2}>
                Nome do Animal
            </Text>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {setNomeAnimal}
                placeholder = 'Nome do Animal'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>

            <Text style = {styles.text2}>
                Fotos do Animal
            </Text>

            <Text style = {styles.text2}>
                Espécie
            </Text>

            <Radio_Buttons_2
                name1 = 'Cachorro'
                name2 = 'Gato'>
            </Radio_Buttons_2>

            <Text style = {styles.text2}>
                Sexo
            </Text>

            <Radio_Buttons_2
                name1 = 'Macho'
                name2 = 'Fêmea'>
            </Radio_Buttons_2>

            <Text style = {styles.text2}>
                Porte
            </Text>

            <Radio_Buttons_3
                name1 = 'Pequeno'
                name2 = 'Médio'
                name3 = 'Grande'>
            </Radio_Buttons_3>

            <Text style = {styles.text2}>
                Idade
            </Text>

            <Radio_Buttons_3
                name1 = 'Filhote'
                name2 = 'Adulto'
                name3 = 'Idoso'>
            </Radio_Buttons_3>

            <Text style = {styles.text2}>
                Temperamento
            </Text>

            <CheckBox3
                name1 = 'Brincalhão'
                name2 = 'Tímido'
                name3 = 'Calmo'>
            </CheckBox3>

            <CheckBox3
                name1 = 'Guarda'
                name2 = 'Amoroso'
                name3 = 'Preguiçoso'>
            </CheckBox3>

            <Text style = {styles.text2}>
                Saúde
            </Text>

            <CheckBox2
                name1 = 'Vacinado'
                name2 = 'Vermifugado'>
            </CheckBox2>

            <CheckBox2
                name1 = 'Castrado'
                name2 = 'Doente'>
            </CheckBox2>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {setDoencaAnimal}
                placeholder = 'Doenças do animal'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>

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

            <Text style = {styles.text2}>
                Sobre o Animal
            </Text>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {setHistAnimal}
                placeholder = 'Compartilhe a história do animal'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>

            <View style = {styles.touchableStyle3}>
                    <TouchableOpacity 
                        style = {styles.touchableStyle2}
                        onPress = {ajudarPress}>
                        <Text style = {styles.textStyle}> Procurar Ajuda </Text>
                    </TouchableOpacity>
            </View>
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