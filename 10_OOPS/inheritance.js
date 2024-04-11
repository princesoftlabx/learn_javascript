class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`)
    }
}

const newUser = new Teacher("Prince", "alphaprince@gmail.com", "213465")
newUser.addCourse()

const secUser = new User("Prince")
// secUser.addCourse()
secUser.logMe()

console.log(newUser instanceof Teacher)
console.log(secUser instanceof User)