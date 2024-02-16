// singleton 
// object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Prince",
    "full name": "Prince Sharma",
    [mySym]: "mykey1",
    age: 21,
    location: "karawal nagar Delhi",
    email: "princesharma@softlabx.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //access the symbol

JsUser.email = "alphaprince0093@gmail.com";
// Object.freeze(JsUser) // Now you don't have authority to change the value of object
JsUser.email = "alphaprince0093@google.com";

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())