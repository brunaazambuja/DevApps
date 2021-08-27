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
    owner_id
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
      owner_id
  });
  };
}
