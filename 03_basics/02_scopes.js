// var c = 300;

let a = 300
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const Username = "prince";

    function two(){
        const website = "youtube"
        console.log(Username)
    }
    // console.log(website)
    two() // in nested functions child can access the parent variables
}

// one()

if(true){
    const Username = "Prince"
    if(Username === "Prince"){
        const website = "prince.com"
        console.log(Username + " " + website)
    }
    // console.log(website)
}
// console.log(Username)


// ****************************** interesting *************************************

function addOne(value){
    return value + 1
}
addOne(5)


const addTwo = function(num){
    return num + 2
}
addTwo(5)