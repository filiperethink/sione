import firebase from './client';

const loginApi = async (email, pass) => {
  const res = await firebase.auth().signInWithEmailAndPassword(email, pass);
  return res;
};

const getToken = async () => {
  const res = await firebase.auth().currentUser.getIdTokenResult();
  return res;
};

export { loginApi, getToken };
