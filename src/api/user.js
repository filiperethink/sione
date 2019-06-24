import firebase from './client';

const getLoggedUser = async () => {
  const user = await firebase.auth().currentUser;
  const ref = await firebase
    .firestore()
    .collection('users')
    .doc(user.uid);
  const doc = await ref.get();
  return { id: user.uid, ...doc.data() };
};

export { getLoggedUser };
