import * as firebase from "firebase";
 const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyB7wGDZtvR6260qiVEqKGOpmDELvZpdLBI",
    authDomain: "ecommerce-eb6a2.firebaseapp.com",
    databaseURL: "https://ecommerce-eb6a2.firebaseio.com",
    projectId: "ecommerce-eb6a2",
    storageBucket: "ecommerce-eb6a2.appspot.com",
    messagingSenderId: "563346205463",
    appId: "1:563346205463:web:7a600f6290f9abffa02552",
    measurementId: "G-GZENXLV2JG"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
export{db, auth};