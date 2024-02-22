// const coding = ['js', 'python', 'java', 'ruby', 'cpp']

// const values = coding.forEach( (item)=>{    //this do'not return the values
//     // console.log(item);
//     return item
// } )    

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> {
//   return  num > 4
// } )

// const newNums =[]


// myNums.forEach( (num)=>{
// if(num>4){
//     newNums.push(num)
// }
// } )

// console.log(newNums)


const books= [
    { title:"book one", genre:"TOC", publish: 1990, edition: 2017},
    { title:"book two", genre:"Java", publish: 2000, edition: 2017},
    { title:"book three", genre:"Science", publish: 1997, edition: 2017},
    { title:"book four", genre:"Data structure", publish: 1990, edition: 2017},
    { title:"book five", genre:"computer networks", publish: 1996, edition: 2017},
    { title:"book six", genre:"Science", publish: 1990, edition: 2017},
]

// let userBooks = books.filter( (book)=> book.genre === 'Science' )

const userBooks = books.filter((bk)=> {
  return  bk.publish >= 1995 && bk.genre === 'Science'
})

console.log(userBooks)
