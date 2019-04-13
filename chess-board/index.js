
function chessBoardCreator(){
    for (let i = 0; i<64; i++){
        let square = document.createElement('div');
        square.setAttribute('class', `square ${i}`);
        document.querySelector(".chess-board-container").appendChild(square);
        let squares = document.getElementsByClassName("square");
        squares[i].style.backgroundColor = Math.floor((i / 8) + i) % 2 == 0 ? 'white' : 'black';
    }  
}
chessBoardCreator();