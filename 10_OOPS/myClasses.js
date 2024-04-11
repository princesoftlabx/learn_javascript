// ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const prince = new User("Prince", "alphaprince@0093.com", "PrinceSH123")

console.log(prince.encryptPassword())
console.log(prince.changeUsername())

// Behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const newUser = new user("Panditji", "princeSharma@gmail.com", "prince1324")
console.log(newUser.changeusername())
console.log(newUser.encryptpassword())