let name = "Prince Sharma";
let age = 21;

// String Interpolation
let mySelf = `My name is ${name.toUpperCase()} and  my age is ${age}`;
console.log(mySelf);

let bio = new String("Prince   ");
console.log(bio.length);
// console.log(bio.trim());
// console.log(bio.trimEnd());
// console.log(bio.includes("e"));
if(bio.includes("e")){
    function sum(a, b){
        const sum = a+b;
        console.log(`this is the sum of a and b ${sum}`);
    }
}
let sumOfTwoNumbers = sum(6,5);

// console.log(bio.indexOf("r")); //its avoiding space
// console.log(bio.charAt("5")); //it's not avoiding space
// console.log(mySelf.split(' ')) //it is used to convert a string into an array
// console.log(bio.slice(2))

let greet = "heeello";

// console.log(greet.concat(name)); //it is used for concatination

// console.log(name.valueOf());
// console.log(bio.substr(0,5))
console.log(bio.replace("e"," sharma"))
console.log(bio.italics())
console.log(bio.padStart(15, 'hello')) //is is used to add something in the variable
console.log(bio.endsWith(' ')) //it is consider space
console.log(bio.startsWith("P"))