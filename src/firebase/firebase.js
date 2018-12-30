import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATA_URL,
    projectId: process.env.FIRBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach(function (childSnapshot) {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     })

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach(function (childSnapshot) {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });


// // Setup "expenses" with three items (description, note, amount, createdAt)
// database.ref('expenses').push({
//     description: 'Rent 2',
//     note: '',
//     amount: 1052,
//     createdAt: 9755451
// });

// // database.ref('notes/-LUstp-0gcRULDkAY3iu').remove();

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, AngularJs'
// // });

// /* callback function for fetching data */
// // database.ref().on('value', (snapshot) => {
// //     const data = snapshot.val();
// //     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// /* Another method for fetching data start*/
// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const data = snapshot.val();
// //         console.log(data);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data', e)
// //     })
// /* Another method for fetching data end*/

// // database.ref().set({
// //     name: 'Chandra Sekar',
// //     age: 27,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Nano Nino'
// //     },
// //     location: {
// //         city: 'Coimbatore',
// //         country: 'India',
// //     }
// // }).then(() => {
// //     console.log('data is saved!');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Tartlabs',
// //     'location/city': 'Pollachi'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed');
// //     })
// //     .catch((e) => {
// //         console.log('Did not remove data', e);
// //     })
