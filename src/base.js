import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-Bq7YBErSr8DxobdN8oNaGG7hOMm0tq4",
  authDomain: "https://catch-of-the-day-julius.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-julius.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;
