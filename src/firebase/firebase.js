import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB_uSV0jOukJ_xmFrOnd5MbQrOFdO-_mNQ",
    authDomain: "expensify-f87b6.firebaseapp.com",
    databaseURL: "https://expensify-f87b6.firebaseio.com",
    projectId: "expensify-f87b6",
    storageBucket: "expensify-f87b6.appspot.com",
    messagingSenderId: "808897213672"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Chandra Sekar'
});