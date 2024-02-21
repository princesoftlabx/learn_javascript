// for of

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
    
}

const greetings = "Hello world"

for (const greet of greetings) {
    if(greet == " "){
        // continue;
        break;
    }
    // console.log(`Each chaar is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
// map.set('FR', "France") mapss  only has unique values

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ":- ", value)
}


const myObj = {
    game1: "NFS",
    game2: "GTA",
    game3: "TAKKEN 3"
}

// for (const [key, value] of myObj) {
//     console.log(`${key} name is ${value}`);
// }