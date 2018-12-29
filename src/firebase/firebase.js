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

// database.ref().set({
//     name: 'Chandra Sekar',
//     age: 27,
//     isSingle: true,
//     location: {
//         city: 'Pollachi',
//         country: 'India',
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('Data was removed');
    })
    .catch((e) => {
        console.log('Did not remove data', e);
    })
