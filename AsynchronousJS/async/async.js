// ASYNC AWAIT

// movePlayer(100, 'Left')
//     .then(() => moverPlayer(400, 'Left'))
//     .then(() => moverPlayer(10, 'Right'))
//     .then(() => moverPlayer(330, 'Left'))

// async function playerStart() {
//     const first = await movePlayer(100, 'Left'); //pause
//     const second = await movePlayer(400, 'Left'); //pause
//     await movePlayer(10, 'Right'); //pause
//     await movePlayer(330, 'Left'); //pause
// }

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonholder.typicode.com/users',
    'https://jsonholder.typicode.com/posts',
    'https://jsonholder.typicode.com/albums'
]

Promise.all(url.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch('oops');

const getData = async function() {
    try {
    const [ users,  posts, albums ] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
    } catch {
        console.log('oops')
    }
}