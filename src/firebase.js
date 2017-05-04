import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA3wsz_ED4XL2EqHOfU4W_1nD2UlZ68yK8",
    authDomain: "dinetuning.firebaseapp.com",
    databaseURL: "https://dinetuning.firebaseio.com",
    projectId: "dinetuning",
    storageBucket: "dinetuning.appspot.com",
    messagingSenderId: "376252811434"
  };

  firebase.initializeApp(config);

const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { database, auth };
export { firebaseListToArray };


export default firebase;