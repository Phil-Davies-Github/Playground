const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
    {title: 'Post Three', body: 'This is post three'}
];

function getPosts(){
    setTimeout(function() {
        var output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({title: 'Post Four', body: 'This is post four'}, getPosts);

console.log(`title : ${posts[0].title}`);
console.log(`title : ${posts[1].title}`);
