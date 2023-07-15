import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBE6ly0e2rJjzUQJo6ns0SKlw8QXr9ccgA',
  authDomain: 'rn-instagram-clone-962ec.firebaseapp.com',
  databaseURL: 'https://rn-instagram-clone-962ec-default-rtdb.firebaseio.com',
  projectId: 'rn-instagram-clone-962ec',
  storageBucket: 'rn-instagram-clone-962ec.appspot.com',
  messagingSenderId: '53070661383',
  appId: '1:53070661383:web:6752a07f33717e83b3a7a2',
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
