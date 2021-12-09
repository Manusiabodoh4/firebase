//import { initializeApp } from "firebase/app";
const { initializeApp } = require("firebase/app")

const firebaseConfig = {
    apiKey: "AIzaSyBaskRF6NUizTPQLodjbANAG5GgvaAtxWs",  
    authDomain: "radiant-pilot-296407.firebaseapp.com",  
    projectId: "radiant-pilot-296407",  
    storageBucket: "radiant-pilot-296407.appspot.com",  
    messagingSenderId: "82993979501",
    appId: "1:82993979501:web:2ffbd46340d63a05485f64",  
    measurementId: "G-PSTH06M08X" 
};

const app = initializeApp(firebaseConfig);

module.exports = app
  