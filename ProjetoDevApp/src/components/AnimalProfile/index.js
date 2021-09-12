import React from 'react'
import { ScrollView , Text, Image, View} from 'react-native';
import { styles } from './styles';

const AnimalProfile = ({route}) => {
    return(
        <ScrollView>
            <View style = {styles.imageViewStyle}>
                <Image
                    style = {styles.imageStyle}
                    source = {{uri : route.params.animal_data.animal_image_url}}>
                </Image>
            </View>
            <Text style = {styles.textTittleStyle}>Nome</Text>
            <Text style = {styles.textDataStyle}>{route.params.animal_data.name_animal}</Text>
            <Text style = {styles.textTittleStyle}>Especie</Text>
            <Text style = {styles.textDataStyle}>{route.params.animal_data.species_animal}</Text>
            <Text style = {styles.textTittleStyle}>Sexo</Text>
            <Text style = {styles.textDataStyle}>{route.params.animal_data.sex_animal}</Text>
            <Text style = {styles.textTittleStyle}>Porte</Text>
            <Text style = {styles.textDataStyle}>{route.params.animal_data.size_animal}</Text>
            <Text style = {styles.textTittleStyle}>Idade</Text>
            <Text style = {styles.textDataStyle}>{route.params.animal_data.age_animal}</Text>
            <Text style = {styles.textTittleStyle}>Temperamento</Text>
            {route.params.animal_data.temperament_animal.map((temp) =>
                <Text style = {styles.textDataStyle}>{temp}</Text>)}
            <Text style = {styles.textTittleStyle}>Saude</Text>
            {route.params.animal_data.health_animal.map((health) =>
                <Text style = {styles.textDataStyle}>{health}</Text>)}
        </ScrollView>
    )
}

export default AnimalProfile