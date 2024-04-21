import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEW1N3McsFF2mxpMU1WcxoQfr7cP6F8Ro",
    authDomain: "medbase-37455.firebaseapp.com",
    projectId: "medbase-37455",
    storageBucket: "medbase-37455.appspot.com",
    messagingSenderId: "438880361288",
    appId: "1:438880361288:web:acf98b29535b68d3e0717d",
    measurementId: "G-HQDB87ERS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = firebase.firestorage()

export default {
    firebase,
    db
}