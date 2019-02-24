const list = document.getElementsByTagName('li');
const notOrange = document.getElementsByClassName('not-orange');


for(i = 0; i < list.length; i++) {
    list[i].style.color = 'orange';
}


for(i = 0; i < notOrange.length; i++){
    notOrnage[i].style.color = 'red';
}
