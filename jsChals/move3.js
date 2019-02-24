function right_three(str) {
    if (str.length > 1)
      {
        return str.slice(-3) + str.slice(0, -3);
      }
 return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));



function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
 console.log(middle_three('abcdefg'));
 console.log(middle_three('HTML5'));
 console.log(middle_three('Python'));
 console.log(middle_three('PHP'));
 console.log(middle_three('Exercises'));


 function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));