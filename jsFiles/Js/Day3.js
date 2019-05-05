let space1 = "X"
let space2 = "O"
let space3 = "X"
let space4 = "X"
let space5 = "X"
let space6 = "O"
let space7 = "O"
let space8 = "X"
let space9 = "O"

console.log("   |     |   ")
console.log(`${space1}  |  ${space2}  |  ${space3}`)
console.log("   |     |   ")
console.log("- - - - - - -")
console.log("   |     |   ")
console.log(`${space4}  |  ${space5}  |  ${space6}`)
console.log("   |     |   ")
console.log("- - - - - - -")
console.log("   |     |   ")
console.log(`${space7}  |  ${space8}  |  ${space9}`)
console.log("   |     |   ")

if(space1 == "O" && space2 == "O" && space3 == "O"){console.log("O Win")}
else if (space1 == "X" && space2 == "X" && space3 == "X"){console.log("X Wins")}
else if(space4 == "O" && space5 == "O" && space6 == "O"){console.log("O Wins")}
else if (space4 == "X" && space5 == "X" && space6 == "X"){console.log("X Wins")}
else if(space7 == "O" && space8 == "O" && space9 == "O"){console.log("O Wins")}
else if (space7 == "X" && space8 == "X" && space9 == "X"){console.log("X Wins")}
else if(space1 == "O" && space4 == "O" && space7 == "O"){console.log("O Wins")}
else if (space1 == "X" && space4 == "X" && space7 == "X"){console.log("X Wins")}
else if(space2 == "O" && space5 == "O" && space8 == "O"){console.log("O Wins")}
else if (space2 == "X" && space5 == "X" && space8 == "X"){console.log("X Wins")}
else if(space3 == "O" && space6 == "O" && space9 == "O"){console.log("O Wins")}
else if (space3 == "X" && space6 == "X" && space9 == "X"){console.log("X Wins")}
else if(space1 == "O" && space5 == "O" && space9 == "O"){console.log("O Wins")}
else if (space1 == "X" && space5 == "X" && space9 == "X"){console.log("X Wins")}
else if(space3 == "O" && space5 == "O" && space7 == "O"){console.log("O Wins")}
else if (space3 == "X" && space5 == "X" && space7 == "X"){console.log("X Wins")}
else{console.log("No winner")}; 


