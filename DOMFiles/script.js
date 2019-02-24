const input = document.querySelector('.input-box');
const btn = document.querySelector('.search-btn');
const imageContainer = document.querySelector('.image-container');
const getType = document.querySelector('.type-box');

btn.addEventListener('click', () => {
    displayImages(parseInt(input.value), getType.value);
})

function displayImages(num, type) {
    for(i = 1; i <= num; i++) {
        let img = document.createElement('img');
        img.className = 'images';
        img.src = `https://source.unsplash.com/random?sig=${Math.random()}&${type}`;
        imageContainer.appendChild(img);
    }
}