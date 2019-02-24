function removeDuplicates(string) {
    let splitString = string.split('');
    const unqiqueArray = [...new Set(splitString)];
    return unqiqueArray.join('');
}

console.log(removeDuplicates('patto'));




// function find_unique_characters( string ){
//     let unique='';
//     for(let i=0; i<string.length; i++){
//         if(unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;
// }
// console.log(find_unique_characters('baraban'));



// function find_unique_characters(str) {
//     let unique = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
//         unique += str[i];
//       }
//     }
//     return unique;
//   }
  
//   console.log(find_unique_characters('baraban'));
//   console.log(find_unique_characters('anaconda'));


// function removeDuplicateCharacters(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(removeDuplicateCharacters('baraban'));


// function find_unique_characters( string ) {
//     let mapping = {};
//     for(let i = 0; i < string.length; i++) {
//         let letter = string[i].toString();
//         mapping[letter] = mapping[letter] + 1 || 1;
//     }
//     let unique = '';
//     for (let letter in mapping) {
//         if (mapping[letter] === 1)
//             unique += letter;
//     }

//     return unique;
// }
