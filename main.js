const helper = require('./helper.js');

//let userDetails = helper.name + ' ' + helper.email;
//console.log(userDetails)

// Simple functions
// helper.sayHello()

//let total = helper.addVAT(100)
//console.log(total)

// Async await
helper.doStuff(100).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})