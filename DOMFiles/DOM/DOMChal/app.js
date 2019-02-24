onkeydown = function keyCode() {
    var key = event.keyCode;
    document.getElementById('key').innerHTML = key;
    var code = event.code;
    document.getElementById('letter').innerHTML = `${code}`;
    var keywhich = event.which;
    document.getElementById('keywhich').innerHTML = `${keywhich}`;
    var letter = event.key;
    document.getElementById('code').innerHTML = `${letter}`;
}