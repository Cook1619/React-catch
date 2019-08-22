import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQ2xTuQSeNK0Jgq9grnT-Ai0vS-jfDGt4",
  authDomain: "catch-of-the-day-matt-cook.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-matt-cook.firebaseio.com"
});

const base =  Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;