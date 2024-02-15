//Dates

let D = new Date();
// console.log(D)
// console.log(D.toString());
// console.log(D.toDateString());
// console.log(D.toISOString());
// console.log(D.toJSON())
// console.log(D.toLocaleDateString());
// console.log(D.toLocaleString())
// console.log(D.toLocaleTimeString())
// console.log(typeof(D))

//Months starts with 0 in javascript
// const myCreatedDate = new Date(2023, 0, 26);
// const myCreatedDate = new Date("2023-01-26");
const myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
// console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
     
})
console.log(newDate);