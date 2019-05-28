
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name} and i have ${this.age} years old! `
    }
};

const me = new Person("jose", 35);
console.log(me.getGretting());

const other = new Person();
console.log(other.getGretting());