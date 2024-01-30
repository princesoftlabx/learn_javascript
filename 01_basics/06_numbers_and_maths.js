const score = 400;

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(5))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))


const salary = 1000000
console.log(salary.toLocaleString('en-IN'));

//***************************** Maths *************************************************/
// console.log(Math);
// console.log(Math.abs(-7)); //used to convert negative value into positive
// console.log(Math.round(4.4))
// console.log(Math.round(4.4))
console.log((Math.random()*10)+1)

// Math.floor
// Math.ceil
const min = 1234
const max = 9999
console.log(Math.floor(Math.random() * (max-min + 1)) + min)
