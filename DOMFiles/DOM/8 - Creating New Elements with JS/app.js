const input = document.querySelector('#input');
const button = document.querySelector('#submit');
let listItem = document.createElement('li');

const hideBtn = document.querySelector('#showhide-btn');

button.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul')[0];

    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
})


hideBtn.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
        list.style.display = 'block';
        hideBtn.textContent = 'hide';
    } else {
        list.style.display = 'none';
        hideBtn.textContent = 'show';
    }
})
