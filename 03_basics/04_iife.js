// Immediately Invoked Function Expression (IIFE)

(function dbConnect(){  //named iife
    console.log("DB CONNECTED")
})();   //iife is used to remove pollution of gobal scope variables and declaration and we have to stop the excution with semicolon

( (name)=>{  //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
} )("Prince")
// dbConnect()