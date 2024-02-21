const userEmail = "Prince@yahoo.io"

if(userEmail) console.log("Got user email");
else{
    console.log("don't have user email")
}

// falsy values - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// thruthy values - "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){                  // check the length of the array
//     console.log("array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
        console.log("object is empty")          // check the length of the object
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)

//terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")