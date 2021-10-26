import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Credits = () => {
    return(
        <View style = {styles.view2Style}>
            <Text style = {styles.tittleStyle}>Colaboradores</Text>

            <View style = {styles.viewStyle}>
                <Text style = {styles.text2Style}>Nome</Text>
                <Text style = {styles.textStyle}>Bruna Azambuja</Text>
                <Text style = {styles.text2Style}>Git</Text>
                <Text style = {styles.textStyle}>brunaazambuja</Text>
            </View>
            <View style = {styles.viewStyle}>
                <Text style = {styles.text2Style}>Nome</Text>
                <Text style = {styles.textStyle}>Danilo Raposo</Text>
                <Text style = {styles.text2Style}>Git</Text>
                <Text style = {styles.textStyle}>DaniloRaposo</Text>
            </View>
            <View style = {styles.viewStyle}>
                <Text style = {styles.text2Style}>Nome</Text>
                <Text style = {styles.textStyle}>Gianlucas dos Santos</Text>
                <Text style = {styles.text2Style}>Git</Text>
                <Text style = {styles.textStyle}>gianlopes</Text>
            </View>
        </View>
    );
};

export default Credits;