"use strict";
class Person {
    constructor(name, age, genderProps) {
        this.name = name,
            this.age = age,
            this.genderProps = genderProps;
    }
    greet() {
        return "hi there" + this.name;
    }
}
const personObject = new Person("vikas", 21, { gender: "male", orientation: "straight", pronoun: "he/him" });
console.log(personObject);
function greet(person) {
    return "hi mr " + person.name + " your age is " + person.age;
}
console.log(greet({ name: "vikas", age: 21, genderProps: { gender: "male", orientation: "straight", pronoun: "he/him" } }));
function renderShape(shape) {
    console.log("Rendered");
}
function calculateArea(shape) {
    console.log("calculated area");
}
renderShape({
    radious: 10,
    width: 10,
    height: 10,
    side: 10
});
