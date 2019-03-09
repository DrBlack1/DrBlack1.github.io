import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
    state = {
        players: [
        {name: "le", score: 0, id: 1},
        {name: "stuart", score: 0, id: 2},
        {name: "dan", score: 0, id: 3},
        {name: "dean", score: 0, id: 4}
    ]
};

prevPlayerId = 4;

handleHighestScore = () => {
    // get an array of the scores for each player
    const scoresArray = this.state.players.map(player => {
        return player.score;
    })
    // find the index of the highest score
    const highestScoreIndex = scoresArray.indexOf(Math.max(...scoresArray));
    // return the index
    return highestScoreIndex;
}

handleScoreChange = (index, delta) => {
    // change prev score state to the specific player score (based on their index)
    this.setState(prevState => ({
        score: prevState.players[index].score += delta
    }));
}

handleRemovePlayer = (id) => {
    this.setState( prevState => {
        return {
            players: prevState.players.filter(p => p.id !== id)
        };
    });
}

handleAddPlayer = name => {
    this.setState(prevState => {
        return {
            players: [
            // take everything from this.state.players (using spread operator)
            ...prevState.players,
            {
                // then create new object for new player
                name,
                score: 0,
                id: this.prevPlayerId += 1
            }
        ]
        }
    })
}

render () {
    return (
        <div className="scoreboard">
            <Header 
            title = "Scoreboard"
            players = { this.state.players } 
            totalPlayers = { this.state.players.length } 
        />

        {/* Players list */}
        { this.state.players.map( (player, index) =>
            <Player 
                index = { index }
                name = { player.name }
                score = { player.score }
                id = { player.id }
                key = { player.id.toString() } 
                changeScore = { this.handleScoreChange }
                removePlayer = { this.handleRemovePlayer }
                highestScoreIndex = { this.handleHighestScore() }  
            />
        ) }
            <AddPlayerForm 
                addPlayer = { this.handleAddPlayer }
            />
        </div>
    );
  }
}

export default App;