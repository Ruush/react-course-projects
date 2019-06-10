
class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}!"`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGretting(){
        let gretting = super.getGretting();
        if(this.location){
            gretting += ` I'm visiting from ${this.location}`
        }
        return gretting
    }
}

const me = new Traveler("Jose Ruela", 35, "Osasco");
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());