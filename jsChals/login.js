let database = [
    {
    userName:"Patto",
    password: "password123"
    }
]

let newsFeed = [
    {
        username: "Bob",
        timeline: "Life is testing..."
    }
];

let userNamePrompt = prompt("whats your username?");
let passwordPrompt = prompt("whats your password?");

function signIn(userName, password) {
    if (userName === database[0].userName && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Incorrect Password!");
        }
    }

    signIn(userNamePrompt, passwordPrompt);