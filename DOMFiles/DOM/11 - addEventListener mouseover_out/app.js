const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');

/*declare new const*/
const listItem = document.getElementsByTagName('li');


button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
})

removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(listItem);
})

/*New code below*/

const list = document.querySelector('#list');

/*not supposed to work*/
list.addEventListener('mouseover', () => {
    listItem[i].textContent = listItem[i].textContent.toUpperCase();
})

list.addEventListener('mouseout', () => {
    listItem[i].textContent = listItem[i].textContent.toUpperCase();
})


// for(let i = 0; i<listItem.length; i++){
//     listItem[i].addEventListener('mouseover', () => {
//         listItem[i].textContent = listItem[i].textContent.toUpperCase();
//         });
//     listItem[i].addEventListener('mouseout', () => {
//         listItem[i].textContent = listItem[i].textContent.toLowerCase();
//         });
//     }
    