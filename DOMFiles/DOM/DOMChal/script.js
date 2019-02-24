// const keyNum = document.querySelector('.key-num');
// const keyName = document.querySelector('.key-name');
// const code = document.querySelector('.key-code');


// function keyCode(){
//     window.addEventListener
// }

// keyCode()

// function keycode () {
//     let key = event.keyCode;
//     console.log(key);
// }

onkeydown = function keycode(){  // function name keycode
    var key = event.keyCode; // the variable 'key' is set to the event key code
    document.getElementById("keycode").innerHTML = key; // when function is executed it finds the element keycode and asks it to print the key next to the keycode..

    var keyname = event.key; 
    document.getElementById("keyname").innerHTML = keyname; 

    var codename = event.code; 
    document.getElementById("codename").innerHTML = codename; 


    console.log(event);
}