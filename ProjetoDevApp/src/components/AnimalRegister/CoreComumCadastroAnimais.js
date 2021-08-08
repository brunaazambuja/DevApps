import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Radio_Buttons_3 } from './RadioButtons3';
import { Radio_Buttons_2 } from './RadioButtons2';
import { CheckBox2 , CheckBox3} from './CheckBoxGroups';

export const CoreComum_1 = () => {
    const [nomeAnimal, setNomeAnimal] = useState('');
    const [doencaAnimal, setDoencaAnimal] = useState('');

    return(
        <View>
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
        </View>
    )
}

export const CoreComum_2 = (props) => {
    const [histAnimal, setHistAnimal] = useState('');

    const [tButton, setTButton] = useState(false);

    const tButtonPress = () => setTButton(!tButton);

    return(
        <View>
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
                        onPress = {tButtonPress}>
                        <Text style = {styles.textStyle}> {props.name} </Text>
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