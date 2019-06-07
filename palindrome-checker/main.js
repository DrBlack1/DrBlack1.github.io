function palindrome(str) {
    //Regular Expression to remove non-alpha numeric
    let regex = /[\W_]+/g //for non-alpha numeric with an undescore(_)
    let newString = str.replace(regex,'').toLowerCase()

    //Split the word per letter into an array
    let newStrArr = newString.split('')
    
    //Word written backward in an array
    let rightToLeft = []
    for (let i = newStrArr.length-1; i >=0; i--) {
        rightToLeft.push(newStrArr[i])
    }
    
    //Check if forward and backward words match
    let matchWordWith = rightToLeft.join('').toLowerCase()
    console.log(matchWordWith)
    console.log(newString)
    
    if (matchWordWith.match(newString)) {
        console.log("It is!")
        return true
    } else {
        console.log("It is not!")
        return false
    }
}

//Submit Button event listener
document.getElementById("submit-btn").addEventListener("click",  () => {
        //DOM element for input value
        word = document.getElementById("word").value
        let checker = palindrome(word)
        if (!checker) {
            document.getElementById("answer-wrapper").textContent = "Nope, it isn't a palindrome!"
        } else {
            document.getElementById("answer-wrapper").textContent = "Yep it is a palindrome!"
        }

        if (word === "") {
            document.getElementById("answer-wrapper").textContent = "Type the word you want to check!"
        }
})  


$(function() {
    $('.arrow-wrapper').click (function() {
      $('html, body').animate({scrollTop: $('#checker').offset().top }, 'slow');
      return false;
    });
  });