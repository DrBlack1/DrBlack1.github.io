

const play = (e) => {
    
    const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
    if(!audio) {
        return
    };
    audio.play();
    audio.currentTime = 0;

    key.classList.add('anim');

}




window.addEventListener('keydown', play);

const keys = Array.from(document.querySelectorAll('.key'));

const removeTransition = (e) => {
    if(!e.propertyName) {
        return
    };
    e.target.classList.remove('anim');
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// document.addEventListener('keydown', (e) => {
//     console.log(e);
 
//     if (e.keyCode == 65) {
//         var audio = new Audio('sound/disqualified.wav');
//         audio.play();
//     };

//     if (e.keyCode == 83) {
//         var audio = new Audio('sound/retarded.wav');
//         audio.play();
//     }; 

//     if(e.keyCode == 68) {
//         var audio = new Audio('sound/show_me.wav')
//         audio.play();
    
//     };

//     if(e.keyCode == 70) {
//         var audio = new Audio('sound/whatever.wav');
//         audio.play();
//     };
