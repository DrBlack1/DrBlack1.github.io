import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    score: 0
  }

  handleIncrementScore = () => {
    this.setState({
      score: this.state.score+1
    })
  }

  handleDecrementScore = () => {
    this.setState({
      score: this.state.score-1
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className='score'>{this.state.score}</div>
        <div className='buttons'>
          <button className='decrease' onClick={this.handleDecrementScore}>-</button>
          <button className='increase' onClick={this.handleIncrementScore}>+</button>
        </div>
      </div>
    );
  }
}

export default App;