// console.log("destructuring");

// const person = {
//     name : 'chandra',
//     age: 26,
//     location : {
//         city: 'pollachi',
//         temp: 98
//     }
// };

// const {name, age} = person;
// const {city, temp : temperature } = person.location;

// console.log(`${name} is ${age}`);
// if(city && temperature) {
//     console.log(`It's is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

