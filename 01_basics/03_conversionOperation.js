let score = "33abc";
console.log(typeof score);      //string

let valueInNumber = Number(score)

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN (Not A Number)

/*
'33' => 33
"33abc" => NaN
true => 1, false=> 2
*/

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0=> false
// "" => false, "Prince" => true

let num = 33;
let numIntoString = String(num);
console.log(typeof numIntoString); //string
