const promiseOne = new Promise(function(resolve, reject){
    //do an async tasks,
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})                        // It is directly connected to the resolve
     

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async two is resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Prince", email: "alphaprince0093@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Prince", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject("Error: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((user)=>{
    return user.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log('E:', err))