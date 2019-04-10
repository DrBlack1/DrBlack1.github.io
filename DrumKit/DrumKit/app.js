function playSound(e) {
    // get audio and key based on their keycode values
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if audio key is not pressed do nothing
    if (!audio) return;
    audio.currentTime = 0;
    
    audio.play();
    key.classList.add('pressed');
    setTimeout(() => {
        key.classList.remove('pressed');
    }, 100);
}

  
window.addEventListener('keydown', playSound);