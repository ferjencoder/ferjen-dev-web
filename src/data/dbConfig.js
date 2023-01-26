// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD30L6gHMxb33zAc86Lo4g5s-kjUHBK-ac',
  authDomain: 'ferjen-dev.firebaseapp.com',
  projectId: 'ferjen-dev',
  storageBucket: 'ferjen-dev.appspot.com',
  messagingSenderId: '622998039764',
  appId: '1:622998039764:web:076f3b90c593fb18a4df41',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
