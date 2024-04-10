function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this, username) // give the r efence of another function
    this.email = email
    this.password = password
}

const user = new createUser("Prince", "aplhaprince@0093.com", "Prince@12345")
console.log(user);