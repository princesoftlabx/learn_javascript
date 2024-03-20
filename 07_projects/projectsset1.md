# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-2vrgj3?file=backgroundChanger%2Findex.html)

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
[Click here](https://stackblitz.com/edit/stackblitz-starters-2vrgj3?file=BMICalculator%2Findex.html)

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

## Project 3 Solution

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-gpefwh?file=digitalClock%2Findex.html)

```javascript
const digiClock = document.getElementById('digi-clock');
digiClock.style.fontSize = "50px";

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleString());
    digiClock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution

## Project Link
[Click here](https://stackblitz.com/edit/stackblitz-starters-gpefwh?file=guessTheNumber%2Findex.html)

```javascript
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const reamaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [];
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a valid number")
    } else if(guess < 1){
        alert("Please Enter a number greater than 1")
    } else if(guess > 100){
        alert("Please Enter a number less than hundred")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Number is Too low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    reamaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML= ''
        reamaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

```

## Project 5 Solution

## Project Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-cvtcu6?file=randomBackgroundColor%2Findex.html)

```javascript
const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.background = randomColor()}
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

## Project 6 Solution

## Project Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-haxubb?file=keyboardCheck%2Findex.html)

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class = 'color'>
      <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
    </table>
    </div>
  `;
});
```