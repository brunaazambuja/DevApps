import auth, { firebase } from '@react-native-firebase/auth';
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
  static sendAdoptionNotification = animal => {
    const sender = this.getLoggedUser().uid;
    const message = `Olá, quero adotar seu bichinho ${animal.name_animal}!`;
    return firestore().collection('Notifications').add({
      type: 'request',
      sender,
      receiver: animal.owner_id,
      message,
      animal_id: animal.id,
    });
  };
  static getNameUser = async id => {
    const userName = await firestore().collection('Users').doc(id).get();
    return userName.data().user_name;
  };
  static getUserImage = async id => {
    const userImage = await firestore().collection('Users').doc(id).get();
    return userImage.data().user_image_url;
  };
  static getAdoptionNotification = (user, setNotifications) => {
    // Esta função atualizará as notifications usando setNotifications sempre que
    // ocorrerem atualizações no firestore.
    // subscriber seve para desinscrever do hook.
    const subscriber = firestore()
      .collection('Notifications')
      .where('receiver', '==', user.uid)
      .onSnapshot(async querySnapshot => {
        let notificationsArray = new Array();
        for (notification of querySnapshot.docs) {
          notificationsArray.push({
            ...notification.data(),
            sender: await FirebaseUtil.getNameUser(notification.data().sender),
            sender_uid: notification.data().sender,
            id: notification.ref.id,
          });
        }
        setNotifications(notificationsArray);
      });

    return subscriber;
  };
  static getSenderNotifictifications = async sender => {
    const notificationsSended = await firestore()
      .collection('Notifications')
      .where('sender', '==', sender)
      .get();
    let arrayNotifications = new Array();

    notificationsSended.forEach(notification => {
      arrayNotifications.push({
        sender: notification.data().sender,
        receiver: notification.data().receiver,
        animal: notification.data().animal_id,
      });
    });

    return arrayNotifications;
  };
  static getAvailableAnimals = async user => {
    const availableAnimals = await firestore()
      .collection('Animals')
      .where('owner_id', '!=', user.uid)
      .get();

    let animalsArray = new Array();

    availableAnimals.forEach(animal => {
      animalsArray.push({ ...animal.data(), id: animal.ref.id });
    });

    return animalsArray;
  };
  static getMyAnimals = async user => {
    const myAnimals = await firestore()
      .collection('Animals')
      .where('owner_id', '==', user.uid)
      .get();

    let animalsArray = new Array();

    myAnimals.forEach(animal => {
      animalsArray.push({ ...animal.data(), id: animal.ref.id });
    });

    return animalsArray;
  };
  static adoptionRejection = async notification => {
    const sender = this.getLoggedUser().uid;
    const animal = await firestore()
      .collection('Animals')
      .doc(notification.animal_id)
      .get();

    const message = `Você não pode adotar ${animal.data().name_animal}.`;

    await firestore().collection('Notifications').add({
      type: 'rejection',
      sender,
      receiver: notification.sender_uid,
      message,
      animal_id: notification.animal_id,
    });

    await firestore().collection('Notifications').doc(notification.id).delete();
  };
  static deleteNotification = async id => {
    await firestore().collection('Notifications').doc(id).delete();
  };
  static adoptionAcceptance = async notification => {
    const sender = this.getLoggedUser().uid;
    const animal = await firestore()
      .collection('Animals')
      .doc(notification.animal_id)
      .get();
    const message = `Agora ${
      animal.data().name_animal
    } é seu. Cheque em meus animais.`;

    await firestore().collection('Notifications').add({
      type: 'acceptance',
      sender,
      receiver: notification.sender_uid,
      message,
      animal_id: notification.animal_id,
    });

    // TODO: Usar transactions
    await firestore().collection('Notifications').doc(notification.id).delete();
    await animal.ref.update({ owner_id: notification.sender_uid });
  };

  static addMessage = (m, sender, receiver, animal) => {
    return firestore()
      .collection('Chats')
      .add({ receiver: receiver, sender: sender, animal: animal, ...m });
  };

  static getMessagesListener = (sender, receiver, animal, setMessages) => {
    let query = firestore().collection('Chats');

    const update = querySnapshot => {
      const messages1 = querySnapshot.docChanges();

      setMessages(messages => {
        let messagesNew = [...messages];
        messages1.forEach(change => {
          const mess = change.doc;
          messagesNew.push({
            _id: mess.data()._id,
            createdAt: mess.data().createdAt.toDate(),
            text: mess.data().text,
            user: mess.data().user,
          });
        });

        messagesNew.sort((m1, m2) => {
          return m1.createdAt < m2.createdAt;
        });
        return messagesNew;
      });
    };

    const subscriber1 = query
      .where('receiver', '==', receiver)
      .where('sender', '==', sender)
      .where('animal', '==', animal)
      .onSnapshot(querySnapshot => {
        update(querySnapshot);
      });
    const subscriber2 = query
      .where('receiver', '==', sender)
      .where('sender', '==', receiver)
      .where('animal', '==', animal)
      .onSnapshot(querySnapshot => {
        update(querySnapshot);
      });
    return { subscriber1, subscriber2 };
  };
}
