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
    return firestore().collection('Users').add({
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
}
