// Declare Functions

function sayHello() {
    console.log('Say Hello')
}


// function addVAT(price) {
//     let total = price*1.2
//     if (total>145) {
//         throw new Error('Bad')
//     } else {
//         console.log(total)
//         return total
//     } 
// }

// ES7
function addVAT(price) {
    return new Promise((resolve, reject)=> {
        let total = price*1.2
        if (total>145) {
            reject ('Bad')
        } else {
            console.log(total)
            resolve (total)
        } 
    })
}


module.exports = {
    name: 'Phil',
    email: 'phildavies265@gmail.com',
    sayHello, // Give object access to the function
    addVAT,
    doStuff: async(price) => {
        let value1 = await addVAT(price)
        let value2 = await addVAT(value1)
        let value3 = await addVAT(value2)
        return value3
    }
}

// async await