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

const database = firebase.database();

database.ref().set({
    name: 'Chandra Sekar',
    age: 27,
    isSingle: true,
    location: {
        city: 'Pollachi',
        country: 'India',
    }
}).then(() => {
    console.log('data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

// database.ref().set('This is my data');

// database.ref('age').set(26);
// database.ref('location/city').set('Coimbatore');

database.ref('attributes').set({
    height: 73,
    weight: 150
}).then(() => {
    console.log("Second set call worked");
}).catch((e) => {
    console.log("Things didn't for second error", e);
});
