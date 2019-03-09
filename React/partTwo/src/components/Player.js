import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

import WinningScore from './WinningScore';
class Player extends PureComponent {
    // pass all scores from players into the state, compare each item in array, return highest number
    render() {
        const { removePlayer, score , id, name, changeScore, index, highestScoreIndex} = this.props;
        return (
            <div className="player">
                <span className="player-name">
                <WinningScore 
                    index = { index } 
                    highestScoreIndex = { highestScoreIndex } 
                />
                    <button 
                        className="remove-player" 
                        onClick={() => removePlayer(id)}
                        >✖
                    </button>
                    { name }
                </span>
    
                <Counter 
                    score = { score } 
                    changeScore = { changeScore } 
                    index = { index } 
                />
            </div>
        );
    }
}

Player.propTypes = {
    removePlayer: PropTypes.func,
    score: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    changeScore: PropTypes.func,
    index: PropTypes.number
}

export default Player;