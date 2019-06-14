import firebase from "./client";
firebase.database().goOnline();

const db = firebase.database();

const getUserById = async id => {
  const eventref = db.ref("users");
  const snapshot = await eventref.once("value");
  const value = snapshot.val();
  const res = Object.values(value);

  return res;
};

export { getUserById };
