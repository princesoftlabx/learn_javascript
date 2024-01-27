let score = "33abc";
// console.log(typeof score);      //string

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN (Not A Number)

/*
'33' => 33
"33abc" => NaN
true => 1, false=> 2
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true, 0=> false
// "" => false, "Prince" => true

let num = 33;
let numIntoString = String(num);
// console.log(typeof numIntoString); //string


// **************************** Operations ********************************

let value = 3
let negValue = -value;
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = "Prince";
let str3 = str1 + " " + str2;
console.log(str3)


console.log(+true)
console.log(+"")

let num1, num2, num3 

num1 = num2 = num3 = 2+2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// ********************** Prefix & Postfix ************************************

let a = 2;
let b = ++a;
console.log(`a: ${a} b: ${b}`); //return the value after increment

let x = 4;
let y = x++;
console.log(`x: ${x} y: ${y}`); //return the value before increment
