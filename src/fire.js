import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDwc9T_jMP1Ust-vH1yfu8HlCrRZ_AGtV8",
    authDomain: "firebasics-01.firebaseapp.com",
    projectId: "firebasics-01",
    storageBucket: "firebasics-01.appspot.com",
    messagingSenderId: "975869999815",
    appId: "1:975869999815:web:df7a2b28ea59236ba21ce2",
    measurementId: "G-DF1SXLBWXS"
};
const fire = firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();
const database = firebase.database();

export default fire;