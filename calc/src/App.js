import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
// import * as math from 'maths.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      operator: "",
      previousNumbers: ""
    };
  }

addToInput = val => {
  this.setState({input: this.state.input + val});
}

addDecimal = val => {
  //only add decimal is there is no current decimal point present in input area
  if(this.state.input.indexOf(".") === -1) {
    this.setState({ input: this.state.input + val});
  }
};

addZeroToInput = val => {
  //if this.state.input is not empty then add zero
  if( this.state.input !== "") {
    this.setState({ input: this.state.input + val});
  }
};

clearInput = () => {
  this.setState({input: ""});
}

add = () => {
  this.state.previousNumber = this.state.input;
  this.setState({ input: ""});
  this.state.operator = "plus";
};

subtract = () => {
  this.state.previousNumber = this.state.input;
  this.setState({ input: ""});
  this.state.operator = "minus";
};

multiply = () => {
  this.state.previousNumber = this.state.input;
  this.setState({ input: ""});
  this.state.operator = "multiply";
};

divide = () => {
  this.state.previousNumber = this.state.input;
  this.setState({ input: ""});
  this.state.operator = "divide";
};

evaluate = () => {
  let op = this.state.operator;
  this.setState({input: eval(this.state.input)});

  if (op === "plus") {
    this.setState({ input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
    });
  } else if (op === "minus") {
    this.setState({input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
    });
  } else if (op === "multiply") {
    this.setState({input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
    });
  } else if (op === "divide") {
    this.setState({input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
    });
  }
}

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;