//arguments object - não funciona com arrow function
const add = function (a, b) {
    console.log(arguments)
    return a + b
};
console.log(add(55, 1));

//this keyword

const user = {
    name: "Gabriel",
    cities: ["SP", "NY", "Coca"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num *  this.multiplyBy)
    }
};

console.log(multiplier.multiply());