const myNums = [1, 2, 3]

// const newNums = myNums.reduce( (acc, cvalue)=>{  // reduce automatically passes curvalue into accumulator
//     console.log(`acc: ${acc} and curvalue: ${cvalue}`)
//     return acc + cvalue
// }, 0) // we can define accumulator's value here



// console.log(newNums)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceToPay)