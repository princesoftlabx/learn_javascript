const user = {
    username: "Prince",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}


console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)
// constructor is reference of a user

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this  // it is defined implictly
}

const userOne = new User("Prince", 12, true)
const userTwo = new User("Anshul", 18, false)
const d = [1,2,3]
// Execution of new or constructor function in four steps  
// new will create empty object or new instance
// constructor function calls because of new keyword and get packed all arguments and give
// this keyword or argument will injected
// we can print that
console.log(userOne.constructor)
// constructor function is reference of user
console.log(userTwo)
console.log("hi Jahanvi")
 
console.log(userTwo instanceof User)
console.log(userOne instanceof Object)
console.log(d instanceof User)