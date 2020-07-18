import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9cjYGW941HQznjxB-BYyEINFw7dNX-wQ",
    authDomain: "login-panel-c4498.firebaseapp.com",
    databaseURL: "https://login-panel-c4498.firebaseio.com",
    projectId: "login-panel-c4498",
    storageBucket: "login-panel-c4498.appspot.com",
    messagingSenderId: "358543518218",
    appId: "1:358543518218:web:a92c9f7dfb4e7890998df3",
    measurementId: "G-0XT0RF3BV9"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();