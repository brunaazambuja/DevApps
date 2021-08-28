import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { Radio_Buttons_3 } from './RadioButtons3';
import { Radio_Buttons_2 } from './RadioButtons2';
import { CheckBox2 , CheckBox3} from './CheckBoxGroups';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/routers';
import { launchImageLibrary } from '../../utils/ImageUtil';

export const CoreComum_1 = (props) => {
    const {image, setImage} = props;

    return(
        <View>
            <Text style = {styles.text2}>
                Nome do Animal
            </Text>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {props.setNomes}
                placeholder = 'Nome do Animal'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>

            <Text style = {styles.text2}>
                Fotos do Animal
            </Text>

            <View>
                <TouchableOpacity
                onPress={() => launchImageLibrary(setImage)}
                    style = {styles.touchableStyle}>
                    <Icon
                        name = 'plus-circle'
                        style = {styles.plusStyle}>
                    </Icon>
                    <Text style = {styles.textPlusStyle}>Adicionar Foto</Text>
                </TouchableOpacity>
            </View>

            <Text style = {styles.text2}>
                Espécie
            </Text>

            <Radio_Buttons_2
                name1 = 'Cachorro'
                name2 = 'Gato'
                setNames = {props.setRaca}
                enum1 = {RadioButtonsEnuns.species.cachorro}
                enum2 = {RadioButtonsEnuns.species.gato}>
            </Radio_Buttons_2>

            <Text style = {styles.text2}>
                Sexo
            </Text>

            <Radio_Buttons_2
                name1 = 'Macho'
                name2 = 'Fêmea'
                setNames = {props.setSexo}
                enum1 = {RadioButtonsEnuns.sex.macho}
                enum2 = {RadioButtonsEnuns.sex.femea}>
            </Radio_Buttons_2>

            <Text style = {styles.text2}>
                Porte
            </Text>

            <Radio_Buttons_3
                name1 = 'Pequeno'
                name2 = 'Médio'
                name3 = 'Grande'
                setNames = {props.setPorte}
                enum1 = {RadioButtonsEnuns.size.pequeno}
                enum2 = {RadioButtonsEnuns.size.medio}
                enum3 = {RadioButtonsEnuns.size.grande}>
            </Radio_Buttons_3>

            <Text style = {styles.text2}>
                Idade
            </Text>

            <Radio_Buttons_3
                name1 = 'Filhote'
                name2 = 'Adulto'
                name3 = 'Idoso'
                setNames = {props.setIdade}
                enum1 = {RadioButtonsEnuns.age.filhote}
                enum2 = {RadioButtonsEnuns.age.adulto}
                enum3 = {RadioButtonsEnuns.age.idoso}>
            </Radio_Buttons_3>

            <Text style = {styles.text2}>
                Temperamento
            </Text>

            <CheckBox3
                name1 = 'Brincalhão'
                name2 = 'Tímido'
                name3 = 'Calmo'
                setname1 = {props.setTemp1}
                setname2 = {props.setTemp2}
                setname3 = {props.setTemp3}>
            </CheckBox3>

            <CheckBox3
                name1 = 'Guarda'
                name2 = 'Amoroso'
                name3 = 'Preguiçoso'
                setname1 = {props.setTemp4}
                setname2 = {props.setTemp5}
                setname3 = {props.setTemp6}>
            </CheckBox3>

            <Text style = {styles.text2}>
                Saúde
            </Text>

            <CheckBox2
                name1 = 'Vacinado'
                name2 = 'Vermifugado'
                setname1 = {props.setSaude1}
                setname2 = {props.setSaude2}>
            </CheckBox2>

            <CheckBox2
                name1 = 'Castrado'
                name2 = 'Doente'
                setname1 = {props.setSaude3}
                setname2 = {props.setSaude4}>
            </CheckBox2>

            <TextInput
                style = {styles.inputStyle}
                onChangeText = {props.setDoenca}
                placeholder = 'Doenças do animal'
                placeholderTextColor = '#bdbdbd'>
            </TextInput>
        </View>
    )
}

export const CoreComum_2 = (props) => {
    const [histAnimal, setHistAnimal] = useState('');

    const [tButton, setTButton] = useState(false);
    const navigation = useNavigation();

    const tButtonPress = () => {
        setTButton(!tButton);
        try {
            props.createAnimal();
            navigation.dispatch(
                StackActions.popToTop());
            navigation.navigate('AnimalRegister2');
        } catch (e) {}
    }

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

const RadioButtonsEnuns = {
    species : {
        cachorro : 'cachorro',
        gato : 'gato'
    },

    sex : {
        macho : 'macho',
        femea : 'femea'
    },

    size : {
        pequeno : 'pequeno',
        medio : 'medio',
        grande : 'grande'
    },

    age : {
        filhote : 'filhote',
        adulto : 'adulto',
        idoso : 'idoso'
    }
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
    touchableStyle : {
        height : 128,
        width : 312,
        backgroundColor : '#f2f2f2',
        alignItems : 'center'
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
    },
    textPlusStyle :{
        fontSize : 14,
        color : '#757575'
    },
    plusStyle : {
        paddingTop : 55
    }
})
