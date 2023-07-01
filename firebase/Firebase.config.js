// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
// import { initializeApp } from "firebase/compact/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : "AIzaSyBo6H3Q-mJDHjWlsAgLy9sa9WQzMjOaVSA" , 
  authDomain : "doctor-patient-92f17.firebaseapp.com" , 
  projectId : "doctor-patient-92f17" , 
  storageBucket : "doctor-patient-92f17.appspot.com" , 
  messagingSenderId : "820078509563" , 
  appId : "1:820078509563:web:5b780df3183a85aeb4df5e" 
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app