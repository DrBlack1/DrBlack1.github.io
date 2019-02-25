function capitaliseFirstLetters(string) {
    words = string.split(' ');

    for (i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase().concat(words[i].substring(1))
    }

    return words.join(' ');
}

const capitalizer = (str) => {
    let newStr = "";
    
     let disect = str.split(' ');
     for (i = 0; i < disect.length; i++) {
      let firstLetter =  disect[i].charAt(0).toUpperCase();
      let word = firstLetter + disect[i].slice(1)
      newStr += (word + " ")
       }
     console.log(newStr);
    }

    function capitaliseFirstLetter(str) {
        const splitArray = str.split(' ');
        const capital = splitArray.map(word => {
          const first = word.charAt(0).toUpperCase();
          return first + word.substring(1);
        })
        return capital.join(' ');
        
      }
      ​
      console.log(capitaliseFirstLetter('my name is patto'));


      function capitalFirst (string) { 
        let capitalString = string.charAt(0).toUpperCase();
        return capitalString + string.substring(1);
    }
    
    console.log(capitalFirst("the 1st leter should be capital"));