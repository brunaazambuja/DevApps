import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { CadastroAnimaisAdocaoCore } from './CadastroAnimaisAdocao';
import { CadastroAnimaisApadrinharCore } from './CadastroAnimaisApadrinhar';
import { CadastroAnimaisAjudaCore } from './CadastroAnimaisAjuda';
import { CoreComum_1, CoreComum_2 } from './CoreComumCadastroAnimais';
import FirebaseUtil from '../../utils/FirebaseUtil';
import storage from '@react-native-firebase/storage';

const Cadastro_Animais = () => {
    const [ajuda, setAjuda] = useState(false);
    const [adocao, setAdocao] = useState(false);
    const [apad, setApad] = useState(false);
    const [image, setImage] = useState(null);

    const ajudaPress = () => {
        setAjuda(true);
        setApad(false);
        setAdocao(false);
        setTempAnimal1(false);
        setTempAnimal2(false);
        setTempAnimal3(false);
        setTempAnimal4(false);
        setTempAnimal5(false);
        setTempAnimal6(false);
        setSaudeAnimal1(false);
        setSaudeAnimal2(false);
        setSaudeAnimal3(false);
        setSaudeAnimal4(false);
    }
    const adocaoPress = () => {
        setAdocao(true);
        setApad(false);
        setAjuda(false);
        setTempAnimal1(false);
        setTempAnimal2(false);
        setTempAnimal3(false);
        setTempAnimal4(false);
        setTempAnimal5(false);
        setTempAnimal6(false);
        setSaudeAnimal1(false);
        setSaudeAnimal2(false);
        setSaudeAnimal3(false);
        setSaudeAnimal4(false);
    }
    const apadPress = () => {
        setApad(true);
        setAdocao(false);
        setAjuda(false);
        setTempAnimal1(false);
        setTempAnimal2(false);
        setTempAnimal3(false);
        setTempAnimal4(false);
        setTempAnimal5(false);
        setTempAnimal6(false);
        setSaudeAnimal1(false);
        setSaudeAnimal2(false);
        setSaudeAnimal3(false);
        setSaudeAnimal4(false);
    }

    const [nomeAnimal, setNomeAnimal] = useState('');
    const [doencaAnimal, setDoencaAnimal] = useState('');
    const [racaAnimal, setRacaAnimal] = useState(RadioButtonsEnuns.species.cachorro);
    const [sexoAnimal, setSexoAnimal] = useState(RadioButtonsEnuns.sex.macho);
    const [porteAnimal, setPorteAnimal] = useState(RadioButtonsEnuns.size.pequeno);
    const [idadeAnimal, setIdadeAnimal] = useState(RadioButtonsEnuns.age.filhote);


    const [tempAnimal1, setTempAnimal1] = useState(false);
    const [tempAnimal2, setTempAnimal2] = useState(false);
    const [tempAnimal3, setTempAnimal3] = useState(false);
    const [tempAnimal4, setTempAnimal4] = useState(false);
    const [tempAnimal5, setTempAnimal5] = useState(false);
    const [tempAnimal6, setTempAnimal6] = useState(false);

    const [saudeAnimal1, setSaudeAnimal1] = useState(false);
    const [saudeAnimal2, setSaudeAnimal2] = useState(false);
    const [saudeAnimal3, setSaudeAnimal3] = useState(false);
    const [saudeAnimal4, setSaudeAnimal4] = useState(false);

    const tempAnimal = (tempA1, tempA2, tempA3, tempA4, tempA5, tempA6) => {
        var array = [];

        if(tempA1)
            array.push('Brincalhão');
        if(tempA2)
            array.push('Timido');
        if(tempA3)
            array.push('Calmo');
        if(tempA4)
            array.push('Guarda');
        if(tempA5)
            array.push('Amoroso');
        if(tempA6)
            array.push('Preguiçoso');

        return array;
    }

    const saudeAnimal = (saudeA1, saudeA2, saudeA3, saudeA4) => {
        var array = [];

        if(saudeA1)
            array.push('Vacinado');
        if(saudeA2)
            array.push('Vermifugado');
        if(saudeA3)
            array.push('Castrado');
        if(saudeA4)
            array.push('Doente');

        return array;
    }

    const createAnimal = async () => {
      try {
        const owner_id = FirebaseUtil.getLoggedUser().uid;
        await FirebaseUtil.createAnimal(
          nomeAnimal,
          racaAnimal,
          sexoAnimal,
          porteAnimal,
          idadeAnimal,
          tempAnimal(tempAnimal1, tempAnimal2, tempAnimal3, tempAnimal4, tempAnimal5, tempAnimal6),
          saudeAnimal(saudeAnimal1, saudeAnimal2, saudeAnimal3, saudeAnimal4),
          doencaAnimal,
          owner_id
          );
          const {uri} = image;
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
          const filename = uri.substring(uri.lastIndexOf('/') + 1);
          await storage()
            .ref('animals/'+filename)
            .putFile(uploadUri);
        } catch (e) {
          alert("Ocorreu um erro ao cadastrar animal.");
          return Promise.reject("Falha no cadastro");
        }
    }

    return(
        <ScrollView>
            <StatusBar backgroundColor="#ffd358" />

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
            {adocao ?
                <View style = {styles.viewOptionStyle}>
                    <Text style = {styles.textTittleStyle}> Adoção </Text>

                        <CoreComum_1
                          image = {image}
                          setImage = {setImage}
                          setNomes = {setNomeAnimal}
                          setDoenca = {setDoencaAnimal}
                          setRaca = {setRacaAnimal}
                          setSexo = {setSexoAnimal}
                          setPorte = {setPorteAnimal}
                          setIdade = {setIdadeAnimal}
                          setTemp1 = {setTempAnimal1}
                          setTemp2 = {setTempAnimal2}
                          setTemp3 = {setTempAnimal3}
                          setTemp4 = {setTempAnimal4}
                          setTemp5 = {setTempAnimal5}
                          setTemp6 = {setTempAnimal6}
                          setSaude1 = {setSaudeAnimal1}
                          setSaude2 = {setSaudeAnimal2}
                          setSaude3 = {setSaudeAnimal3}
                          setSaude4 = {setSaudeAnimal4}>
                        </CoreComum_1>

                    <CadastroAnimaisAdocaoCore></CadastroAnimaisAdocaoCore>
                    {ajuda ?    <View>
                                    <Text style = {styles.textTittleStyle}> Ajuda </Text>
                                    <CadastroAnimaisAjudaCore></CadastroAnimaisAjudaCore>
                                </View>  : null}
                    <CoreComum_2
                        name = 'Colocar Para Adoção'
                        createAnimal = {createAnimal}></CoreComum_2>
                </View> : null}
            {apad ?
                <View style = {styles.viewOptionStyle}>
                    <Text style = {styles.textTittleStyle}> Apadrinhar </Text>
                    <CoreComum_1
                        setNomes = {setNomeAnimal}
                        setDoenca = {setDoencaAnimal}
                        setRaca = {setRacaAnimal}
                        setSexo = {setSexoAnimal}
                        setPorte = {setPorteAnimal}
                        setIdade = {setIdadeAnimal}
                        setTemp1 = {setTempAnimal1}
                        setTemp2 = {setTempAnimal2}
                        setTemp3 = {setTempAnimal3}
                        setTemp4 = {setTempAnimal4}
                        setTemp5 = {setTempAnimal5}
                        setTemp6 = {setTempAnimal6}
                        setSaude1 = {setSaudeAnimal1}
                        setSaude2 = {setSaudeAnimal2}
                        setSaude3 = {setSaudeAnimal3}
                        setSaude4 = {setSaudeAnimal4}>
                    </CoreComum_1>
                    <CadastroAnimaisApadrinharCore></CadastroAnimaisApadrinharCore>
                    {ajuda ?    <View>
                                    <Text style = {styles.textTittleStyle}> Ajuda </Text>
                                    <CadastroAnimaisAjudaCore></CadastroAnimaisAjudaCore>
                                </View>  : null}
                    <CoreComum_2
                        name = 'Procurar Padrinho'
                        createAnimal = {createAnimal}></CoreComum_2>
                </View> : null}
            {(ajuda && (!apad && !adocao)) ?
                <View style = {styles.viewOptionStyle}>
                    <Text style = {styles.textTittleStyle}> Ajuda </Text>
                    <CoreComum_1
                        setNomes = {setNomeAnimal}
                        setDoenca = {setDoencaAnimal}
                        setRaca = {setRacaAnimal}
                        setSexo = {setSexoAnimal}
                        setPorte = {setPorteAnimal}
                        setIdade = {setIdadeAnimal}
                        setTemp1 = {setTempAnimal1}
                        setTemp2 = {setTempAnimal2}
                        setTemp3 = {setTempAnimal3}
                        setTemp4 = {setTempAnimal4}
                        setTemp5 = {setTempAnimal5}
                        setTemp6 = {setTempAnimal6}
                        setSaude1 = {setSaudeAnimal1}
                        setSaude2 = {setSaudeAnimal2}
                        setSaude3 = {setSaudeAnimal3}
                        setSaude4 = {setSaudeAnimal4}>
                    </CoreComum_1>
                    <CadastroAnimaisAjudaCore></CadastroAnimaisAjudaCore>
                    <CoreComum_2
                        name = 'Procurar Ajuda'
                        createAnimal = {createAnimal}></CoreComum_2>
                </View> : null}
        </ScrollView>
    );
};

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
    },
    textTittleStyle : {
        fontSize : 16,
        color : '#434343'
    },
    viewOptionStyle : {
        padding : 16
    }
})


export default Cadastro_Animais;
