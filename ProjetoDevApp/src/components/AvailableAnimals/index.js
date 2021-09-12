import React, {useState} from 'react';
import { ScrollView , Text, TouchableOpacity, StatusBar, Image, View} from 'react-native';
import FirebaseUtil from '../../utils/FirebaseUtil';
import { styles } from './styles';

const AvailableAnimals = () => {
    const [listAnimals, setListAnimals] = useState([]);
    FirebaseUtil.getAvailableAnimals().then((animals) => setListAnimals(animals));

    return (
        <ScrollView style = {styles.scrollViewStyle}>
            {listAnimals.map((animal) => 
                <AnimalIcons 
                    animal_image_url = {animal.animal_image_url}
                    name_animal = {animal.name_animal}>
                </AnimalIcons>)}
        </ScrollView>
    )
}

const AnimalIcons = (props) => {
    
    return(
        <TouchableOpacity style = {styles.touchableOpacityStyle}>
            <View style = {styles.topBarStyle}>
                <Text style = {styles.textTopBarStyle}> {props.name_animal} </Text>
            </View>
            <Image
                source={{ uri: props.animal_image_url}}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    )
}

export default AvailableAnimals;