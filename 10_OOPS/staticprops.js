class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const Prince = new User("Prince")
// console.log(Prince.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const newUser = new Teacher("Anshul", "anu@love.com")
console.log(newUser.createId());