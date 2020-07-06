const posts = [
    { title: 'Post One', content: 'This is post one'},
    { title: 'Post Two', content: 'This is post two'},
]

function getPosts() {
    setTimeout(function(){
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        // insert into body
        document.body.innerHTML = output

    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            posts.push(post)
            const error = true
            if (!error){
                resolve()
            } else {
                reject ('Error : Something went wrong..')
            }

        }, 2000)
    })
    
}

// Async functions are a more elegant way to handle promises
// async function init() { // means that this function always returns a promise
//     await createPost({title: 'Post Three', content: 'This is post three'}) // works only inside async functions & waits for this to be done before 
//     getPosts()
// }

async function inittrycatch() { // means that this function always returns a promise
    try { // first try this code if there are no errors the catch(err) is ignored
        await createPost({title: 'Post Three', content: 'This is post three'}) // works only inside async functions & waits for this to be done before 
    } catch (err) { // If an error occurs the try execution stops and control flows the beginning of the catch(err). err can be an name and will contain an object detailing the error
        console.log(err)
    }
    getPosts()
}


//init().catch(err => console.log(err))  // try .. catch not implemented in async function

inittrycatch()


//getPosts()
//createPost({ title: 'Post Three', content: 'This is post three'}, getPosts) // Including Callback function
// createPost({title: 'Post Three', content: 'This is post three'}) // returns a promise 
//     .then(getPosts) // then call getPosts
//     .catch(err => console.log(err))