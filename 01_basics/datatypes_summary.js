//how to access data & how to store data in memory categories of datatypes
//*************************** Primitive Datatypes **********************************

// 7 types : String, Number, Boolean, Null, Undefined, BigInt, NaN(Not A Number), Symbol(used to create unique element)

const id = Symbol('213')
const anotherId = Symbol('213')
console.log(id)
console.log(anotherId)

console.log(id === anotherId)

const bigNumber = 45555555555555555n 

// Reference Type [Non-Primitive]
// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraaj", "doga"]
let myObj= {
    name: "Prince",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);