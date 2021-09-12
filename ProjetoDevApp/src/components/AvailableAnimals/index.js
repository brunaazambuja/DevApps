import React, {useState} from 'react';
import { ScrollView , Text, TouchableOpacity, StatusBar, Image, View} from 'react-native';
import FirebaseUtil from '../../utils/FirebaseUtil';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const AvailableAnimals = () => {
    const [listAnimals, setListAnimals] = useState([]);
    FirebaseUtil.getAvailableAnimals().then((animals) => setListAnimals(animals));

    return (
        <ScrollView style = {styles.scrollViewStyle}>
            {listAnimals.map((animal) => 
                <AnimalIcons 
                    animal_data = {animal}>
                </AnimalIcons>)}
        </ScrollView>
    )
}

const AnimalIcons = ({animal_data}) => {
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity 
            style = {styles.touchableOpacityStyle}
            onPress = {() => navigation.navigate('AnimalProfile', {animal_data : animal_data})}>
            <View style = {styles.topBarStyle}>
                <Text style = {styles.textTopBarStyle}> {animal_data.name_animal} </Text>
            </View>
            <Image
                source={{ uri: animal_data.animal_image_url}}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    )
}

export default AvailableAnimals;