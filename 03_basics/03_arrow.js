const user = {
    username: "Prince",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username =  "Anu"
// user.welcomeMessage()

console.log(this) // in node environment this will return empty object

function global(){
    let username = "prince"
    console.log(this.username) // in function we don't access this
}
// global()

const chai = () =>{
    let username = "prince"
    console.log(this.username)
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2 // this technique iss called implicit return method
//  const addTwo = (num1, num2) => (num1+num2) // with curly braces we have to write return but with parenthesis it is not necessary
 const addTwo = (num1, num2) => ({username:"prince"}) // with curly braces we have to write return but with parenthesis it is not necessary

console.log(addTwo(3, 8))



// const myArr = [2,4,6,8]

// myArr.forEach(()=>())