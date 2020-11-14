import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAvTqJq4qzCbmJg-mSNrCH053cVhubFn6Q",
    authDomain: "facebook-messenger-clone-c1d6c.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-c1d6c.firebaseio.com",
    projectId: "facebook-messenger-clone-c1d6c",
    storageBucket: "facebook-messenger-clone-c1d6c.appspot.com",
    messagingSenderId: "973981274632",
    appId: "1:973981274632:web:c5cc1b9314a0185ed6b7bd",
    measurementId: "G-WCGSWSSDSJ"

})

const db = firebaseApp.firestore();

export default db;