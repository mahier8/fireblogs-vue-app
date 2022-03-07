// we only import the specific parts of firebase we need
import firebase from "firebase/app";
import "firebase/firestore";

// our SDK from our app in Firebase
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

// we create variables, one to initialize our config and the
// other to give us a timestamp in the db
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.fieldValue.serverTimestamp;

// we export our timestamp and the variable with the db
export { timestamp };
export default firebaseApp.firestore;
