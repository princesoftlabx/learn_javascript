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
## Project 2 Solution

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-7jnhfz?file=BMICalculator%2Findex.html)

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
e.preventDefault();
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('.results')

if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = "Please give a valid height"
}
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = "Please give a valid weight"
}
else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2)
  //show the result 
  //show the result 
  if(bmi <= 18.6){
    results.innerHTML = `<span> You are under weight ${bmi}</span>`
  }
  if(bmi > 18.6 && bmi <= 24.9){
    results.innerHTML = `<span> You are in normal bmi index ${bmi}</span>`
  }
  if(bmi > 24.9){
    results.innerHTML = `<span> You are Over Weight ${bmi}</span>`
  }
}

})

```