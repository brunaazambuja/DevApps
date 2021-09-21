import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class FirebaseUtil {
  static signIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };
  static signUp = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };
  static signOut = () => {
    return auth().signOut();
  };
  static getLoggedUser = () => {
    return auth().currentUser;
  };
  static createUser = (
    full_name,
    user_name,
    email,
    city,
    adress,
    state,
    age,
    phone,
    user_image_url,
  ) => {
    return firestore().collection('Users').doc(auth().currentUser.uid).set({
      full_name,
      user_name,
      email,
      city,
      adress,
      state,
      age,
      phone,
      user_image_url,
    });
  };
  static createAnimal = (
    name_animal,
    species_animal,
    sex_animal,
    size_animal,
    age_animal,
    temperament_animal,
    health_animal,
    health_description,
    owner_id,
    animal_image_url,
  ) => {
    return firestore().collection('Animals').add({
      name_animal,
      species_animal,
      sex_animal,
      size_animal,
      age_animal,
      temperament_animal,
      health_animal,
      health_description,
      owner_id,
      animal_image_url,
  });
  };
  static getAvailableAnimals = async () => {
    const availableAnimals = await firestore().collection('Animals').get();

    let animalsArray = new Array();

    availableAnimals.forEach((animal) => {
      animalsArray.push(animal.data());
    });

    return animalsArray;
  };
  static getMyAnimals = async (user) => {
    const myAnimals = await firestore().collection('Animals').where('owner_id', '==', user.uid).get();

    let animalsArray = new Array();

    myAnimals.forEach((animal) => {
      animalsArray.push(animal.data());
    });

    return animalsArray;
  };
}
