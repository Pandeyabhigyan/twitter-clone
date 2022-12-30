import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAx8zJ10BPNgOBeyfGztRE5_MrJpcv7I0",
    authDomain: "melodic-courier-372917.firebaseapp.com",
    projectId: "melodic-courier-372917",
    storageBucket: "melodic-courier-372917.appspot.com",
    messagingSenderId: "176653103500",
    appId: "1:176653103500:web:ecea56d0832a57a559a6a9",
    measurementId: "G-014TC2JPVP"
  };  
initializeApp(firebaseConfig);
const db =getFirestore();
const colRef=collection(db,'posts');

export default colRef;