// singleton

const tinderUser = new Object() 
tinderUser.id = "123abc"
tinderUser.name = "Prince"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "AlphaPrince@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Prince",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) //? is usde to protect your object

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj4 = {5:'a', 6:'b'}

// const obj3 = obj1 + obj2
// const obj3 = Object.assign({}, obj1, obj2, obj4); // create new object

const obj3 = {...obj1, ...obj2, ...obj4}

console.log(obj3)

const users = [
    {
        id: 1,
        email: "alphaprince0093@gmail.com"
    },
    {
        id: 1,
        email: "alphaprince93@gmail.com"
    },
    {
        id: 1,
        email: "alphaprince0093@gmail.com"
    }
]

// console.log(users[1])

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// // console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course // destructuring of object
// console.log(courseInstructor) 
console.log(instructor) 

// Javascript Object Notation (JSON)

// {
//     "name": "Prince",
//     "coursename": "JS by Histesh choudhary",
//     "price": "free"
// }

[
    {},
    {},
    {}
]