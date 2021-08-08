import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Radio_Buttons_3 } from './RadioButtons3';
import { Radio_Buttons_2 } from './RadioButtons2';
import { CheckBox1, CheckBox2 , CheckBox3, CheckBox1_3_Choice} from './CheckBoxGroups';

export const Cadastro_Animais_Adocao = () => {
    const [nomeAnimal, setNomeAnimal] = useState('');
    const [doencaAnimal, setDoencaAnimal] = useState('');
    const [histAnimal, setHistAnimal] = useState('');

    const [adotar, setAdotar] = useState(false);

    const adotarPress = () => setAdotar(!adotar);

    return(
        <View style = {styles.viewAdocao}>
            <Text style = {styles.textAdocao}>
                Adoção
            </Text>

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
                        onPress = {adotarPress}>
                        <Text style = {styles.textStyle}> Colocar Para Adoção </Text>
                    </TouchableOpacity>
            </View>
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