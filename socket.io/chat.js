const socket = io();

socket.on('message', (text) => {
    let makeDiv = document.createElement('div');
    let textNode = document.createTextNode(text);
    makeDiv.appendChild(textNode);
    document.body.appendChild(makeDiv);
})




document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault()

    let message = document.getElementById("mySubmit").value;

    socket.emit('sendMessage',message)
        document.querySelector('input').value = '';
});


