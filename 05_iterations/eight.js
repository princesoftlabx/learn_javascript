const myNums = [1, 2, 3]

const newNums = myNums.reduce( (acc, cvalue)=>{
    return acc + cvalue
}, 0) // we can define accumulator's value here

console.log(newNums)