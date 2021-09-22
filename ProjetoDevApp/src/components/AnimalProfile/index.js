import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { styles } from './styles';
import PressableButton from '../PressableButton/PressableButton';
import FirebaseUtil from '../../utils/FirebaseUtil';
import { useNavigation } from '@react-navigation/native';

const AnimalProfile = ({ route }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={{ uri: route.params.animal_data.animal_image_url }}></Image>
      </View>
      <Text style={styles.textTittleStyle}>Nome</Text>
      <Text style={styles.textDataStyle}>
        {route.params.animal_data.name_animal}
      </Text>
      <Text style={styles.textTittleStyle}>Espécie</Text>
      <Text style={styles.textDataStyle}>
        {route.params.animal_data.species_animal}
      </Text>
      <Text style={styles.textTittleStyle}>Sexo</Text>
      <Text style={styles.textDataStyle}>
        {route.params.animal_data.sex_animal}
      </Text>
      <Text style={styles.textTittleStyle}>Porte</Text>
      <Text style={styles.textDataStyle}>
        {route.params.animal_data.size_animal}
      </Text>
      <Text style={styles.textTittleStyle}>Idade</Text>
      <Text style={styles.textDataStyle}>
        {route.params.animal_data.age_animal}
      </Text>
      <Text style={styles.textTittleStyle}>Temperamento</Text>
      {route.params.animal_data.temperament_animal.map(temp => (
        <Text style={styles.textDataStyle} key={temp}>
          {temp}
        </Text>
      ))}
      <Text style={styles.textTittleStyle}>Saúde</Text>
      {route.params.animal_data.health_animal.map(health => (
        <Text style={styles.textDataStyle} key={health}>
          {health}
        </Text>
      ))}
      { route.params.display_adoption_button ?
        <PressableButton
          style={styles.adoptButton}
          onPress={() => {
            FirebaseUtil.sendAdoptionNotification(route.params.animal_data);
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Quero adotar!</Text>
        </PressableButton> : null}
    </ScrollView>
  );
};

export default AnimalProfile;
