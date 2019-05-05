let winner = false
const naughtsandcrosses = {

    playerOne: 'x',
    playerTwo: 'o',
    grid: [
        ['', '', ''], ['', '', ''], ['', '', '']
    ],

showGrid() {

    console.log(this.grid[0])
    console.log(this.grid[1])
    console.log(this.grid[2])
    console.log('')

}, 

    naught(chooseRow, chooseColumn) {

        if(this.grid[chooseRow][chooseColumn] = '') {
            this.grid[chooseRow][chooseColumn] = this.playerOne;
        }
    } ,

    checkLine(value1, value2, value3) {

        if(value1 == 'x' && value2 == 'x' && value3 == 'x') {
            
            return true

        } else if (value1 == 'o' && value2 == 'o' && val3 == 'o') {

            return true

        } else {

            return false

        }
    }, 

    checkWin(){

        for(i = 0; i < 3; i++) {
            if(this.checkLine(this.grid[i][0], this.checkLine(this.grid[i][1], this.checkLine(this.grid[i][2])))) {

                return winner = true

            } else if (this.checkLine(this.grid[0][i], this.checkLine(this.grid[1][i], this.checkLine(this.grid[2][i])))) {

                return winner = true

            } 
            if(this.checkLine(this.grid[0][0], this.checkLine(this.grid[1][1], this.checkLine(this.grid[2][2])))) {

                return winner = true
            
            } else if(this.checkLine(this.grid[0][2], this.checkLine(this.grid[0][0], this.checkLine(this.grid[2][0])))) {

                return winner = true

            } 
        }

    }

}