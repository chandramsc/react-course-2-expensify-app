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

// Setup "expenses" with three items (description, note, amount, createdAt)
database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 1052,
    createdAt: 9755451
});

database.ref('expenses').push({
    description: 'Phone Bill',
    note: '',
    amount: 10252,
    createdAt: 9755451
});

database.ref('expenses').push({
    description: 'EB Bill',
    note: '',
    amount: 502,
    createdAt: 9755451
});

// database.ref('notes/-LUstp-0gcRULDkAY3iu').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, AngularJs'
// });

/* callback function for fetching data */
// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

/* Another method for fetching data start*/
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const data = snapshot.val();
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })
/* Another method for fetching data end*/

// database.ref().set({
//     name: 'Chandra Sekar',
//     age: 27,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Nano Nino'
//     },
//     location: {
//         city: 'Coimbatore',
//         country: 'India',
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Tartlabs',
//     'location/city': 'Pollachi'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e);
//     })
