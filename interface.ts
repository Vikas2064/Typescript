////////interfaces 
interface PersonGenderProperties{
    gender:string;
    orientation:string;
    pronoun:string;
}

interface PersonInterface{
    name:string,
    age:number,
    genderProps:PersonGenderProperties;
}

interface AnimanlInterface extends PersonGenderProperties{
    name:string;
    furType:string;
}

class Person implements PersonInterface{
    name:string;
    age:number;
    genderProps: PersonGenderProperties;
    constructor(name :string, age: number,genderProps: PersonGenderProperties){
        this.name=name,
        this.age=age,
        this.genderProps=genderProps
    }
    greet(){
        return "hi there" + this.name;
    }
}

const personObject = new Person("vikas",21,{gender:"male",orientation:"straight",pronoun:"he/him"});
console.log(personObject)



///// Types

type PersonGenderProperties1={
    gender:string;
    orientation:string;
    pronoun:string;
}

type PersonInterface1={
    name:string,
    age:number,
    genderProps:PersonGenderProperties1;
}

function greet(person:PersonInterface1):string{
    return "hi mr "+person.name+ " your age is "+ person.age;
}

console.log(greet({name:"vikas",age:21,genderProps:{gender:"male",orientation:"straight",pronoun:"he/him"}}));
//////


interface Circle {
    radious:number;
    borderWidth?:number;  //// here ? tell that either borderWidth can exist or not
}
interface Squre{
    side:number
}
interface Ractangle {
    width:number;
    height:number;
}
type Shape = Circle|Ractangle|Squre;
function renderShape(shape:Shape){
    console.log("Rendered")
}

function calculateArea(shape:Shape){
    console.log("calculated area");
}

renderShape({
    radious:10,
    width:10,
    height:10,
    side:10
})

