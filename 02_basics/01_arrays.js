//array

const myArr = [0, 1, 2, 3, 4, 5];
const myheros = ["shaktimaan", "perMan"];
const newArr = new Array(1, 2, 3, 4) 

// console.log(myArr[4])

// Array Methods
// myArr.push(6)
// console.log(myArr)

// myArr.pop();
// myArr.unshift(7);
// myArr.shift();

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

let addArr = myArr.join()
// console.log(typeof addArr);

// console.log( myArr)

// slice, splice 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1)

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2)

//splice manipulates the origin array but slice can't