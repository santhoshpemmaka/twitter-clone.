import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB9UfyVlLzTzwzr_gfd1LbMDE-e0xX9VsQ",
  authDomain: "twitter-clone-1ca64.firebaseapp.com",
  databaseURL: "https://twitter-clone-1ca64.firebaseio.com",
  projectId: "twitter-clone-1ca64",
  storageBucket: "twitter-clone-1ca64.appspot.com",
  messagingSenderId: "1084780144404",
  appId: "1:1084780144404:web:bae9eaf760645864d14401",
  measurementId: "G-Y1EEZR1C5J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
