

// how to use array in typescript
type numberArr=(number|string)[];
type User={
    name:string;
    age:number;
}
function getFirstElement(arr:numberArr):(number|string)
{
    return arr[0];
}
let a=getFirstElement([1,2,3])
let b=getFirstElement(["one","two","three"])

// here the problem is type of a/b is (number or string) not only string or number so normal function for string like (b.toLowerCase()) will not work 
// to solve this problems we use generics.

function getFirstElement1<T>(arr:T[]){
    return arr[0]
}

let number1=getFirstElement1([1,2,3])    ///getFirstElement1<number>([1,2,3])
let string1=getFirstElement1(["one","two","three"]) //getFirstElement1<string>(["one","two","three"])
string1=string1.toUpperCase();
let firstUser=getFirstElement1<User>([{name:"hello",age:32}])
console.log(firstUser)