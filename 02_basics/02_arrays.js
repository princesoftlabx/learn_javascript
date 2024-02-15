const marvel_heros = ["thor", "ironMan", "Spiderman"]
const dc_heros = ["superman", "batMan", "flash"]

// marvel_heros.push(dc_heros); it is used to push new values in an array
// console.log(marvel_heros[3][1])

// const all_Heros = marvel_heros.concat(dc_heros) //it is used to merge two arays
// console.log(all_Heros)


const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [5, 6]]]

const realArray = another_array.flat(Infinity); //its used to return single array
console.log(realArray)

console.log(Array.isArray("prince")) // it is used to chck array
console.log(Array.from("prince")) //convert into a array and it does not execute object and return an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // convert into an array