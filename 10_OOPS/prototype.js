// let myName = "Prince     ";
// console.log(myName.truelength);


let myHeroes = ["thor", "spiderman", "ironman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "garvis",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.prince = function(){
    console.log(`Prince is present in all object`)
}

Array.prototype.heyPrince = function(){
    console.log(`Prince says hello`);
}


heroPower.prince()
myHeroes.prince()
// heroPower.heyPrince()
myHeroes.heyPrince()


// inheritance

const user= {
    name: "Prince",
    email: "alphaprince0093@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

//modernSyntax

Object.setPrototypeOf(user, TASupport)

let anotherName = "PrinceSharma         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

anotherName.trueLength()
"PanditJi".trueLength()
"Graduate".trueLength()