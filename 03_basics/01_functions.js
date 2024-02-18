function sayMyName(name){
    console.log(name);
}

// sayMyName("Prince")
// sayMyName("Anshul")
// sayMyName("Anuradha")
// sayMyName("Bhanu")

// function sum(num1, num2){  //parameters
//     // if(num1 == "Number" && num2 == "Number"){
//         console.log(num1+num2);
    // }
    // else{
    //     console.log("please enter the valid statement");
    // }
// }

function sum(num1, num2){
    // let result = num1 + num2
    // return result; // after return it does not print anything
    return num1 + num2
}

const result = sum(5, 10) // arguments

console.log("Result: ", result)

function loginUserMessage(userName = "anu"){
    if(userName === undefined && !userName){
        console.log("Please enter userName")
        return
    }
    return `${userName} just loggedIn`
}
// console.log(loginUserMessage("prince"))
console.log(loginUserMessage("PRince"))

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    userName: "prince",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.userName} and Price is ${anyObj.price}`)
}

// handleObject(user);
handleObject({
    userName: "Anu",
    price: 499
});


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 1000]))
