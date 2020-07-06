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

function createPost(post, callback) {
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 2000)
}

//getPosts()

createPost({ title: 'Post Three', content: 'This is post three'}, getPosts) // Including Callback function