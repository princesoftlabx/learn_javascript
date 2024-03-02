# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-sfzbbw?file=backgroundChanger%2Findex.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
// console.log(buttons)
buttons.forEach( (button)=>{
// console.log(buttons)
button.addEventListener('click', (e)=>{
// console.log(e);
// console.log(e.target)
if(e.target.id === "red"){
body.style.backgroundColor = "red"
}
if(e.target.id === "yellow"){
body.style.backgroundColor = "yellow"
}
if(e.target.id === "green"){
body.style.backgroundColor = "green"
}
if(e.target.id === "blue"){
body.style.backgroundColor = "blue"
}
if(e.target.id === "white"){
body.style.backgroundColor = "white"
}
})
} )

```