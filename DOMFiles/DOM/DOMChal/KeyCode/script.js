const keyNum = document.querySelector('.key-num');
const keyName = document.querySelector('.key-name');
const codeKey = document.querySelector('.key-code');

function keyCode() {
    window.addEventListener('keydown', () => {
        keyNum.textContent = event.keyCode;
        codeKey.textContent = event.code;
        keyName.textContent = event.key.toUpperCase();
    })
}

keyCode();