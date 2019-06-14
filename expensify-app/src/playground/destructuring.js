//
// Object destructuring
//

/* const person = {
    //name: "Gabriel",
    age: 26,
    location: {
        city: "São Paulo",
        temp: 26
    }
}

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
};
 */

/* const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
 */

//
// Array destructuring
//
/* 
const address = ["Ze Bao 23", "São Paulo", "São Paulo", "02280900"];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`)
 */

const item = ["Coffee (hot)", "$2.00", "2.50", "2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)