function checkDriverAge() {
    let age = prompt("please enter your age?");
    if (age <18) {
        alert ("too young");
    }
    else if  (age ==18) {
        alert ("Just about!");
    }
    else if  (age >18) {
        alert ("go nuts! drive away!!");
    }
}