import React, { Component } from 'react';
import '../styles/app.css';

import Button from './Button';
import Display from './Display';
import ClearButton from './ClearButton';

class App extends Component {

    state = {
        input: ''
    }

    inputHandler = (num) => {
        this.setState({
            input: this.state.input + num
        })
    }

    resetHandler = () => {
        this.setState({
            input: ''
        })
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    calculationHandler = () => {
        let total = eval(this.state.input)
        this.setState({
            input: this.numberWithCommas(total)
        })
    }


	render() {
        return (
            <div className='app'>
                <div className='calc'>
                    <div className='row'>
                        <Display value={this.state.input}/>
                    </div>
                    <div className='row'>
                        <ClearButton resetHandler={this.resetHandler}>reset</ClearButton>
                    </div>
                    <div className='row'>
                        <Button handleInput={this.inputHandler}>7</Button>
                        <Button handleInput={this.inputHandler}>8</Button>
                        <Button handleInput={this.inputHandler}>9</Button>
                        <Button handleInput={this.inputHandler}>/</Button>
                    </div>
                    <div className='row'>
                        <Button handleInput={this.inputHandler}>4</Button>
                        <Button handleInput={this.inputHandler}>5</Button>
                        <Button handleInput={this.inputHandler}>6</Button>
                        <Button handleInput={this.inputHandler}>*</Button>
                    </div>
                    <div className='row'>
                        <Button handleInput={this.inputHandler}>1</Button>
                        <Button handleInput={this.inputHandler}>2</Button>
                        <Button handleInput={this.inputHandler}>3</Button>
                        <Button handleInput={this.inputHandler}>+</Button>
                    </div>
                    <div className='row'>
                        <Button handleInput={this.inputHandler}>.</Button>
                        <Button handleInput={this.inputHandler}>0</Button>
                        <Button handleInput={() => this.calculationHandler()}>=</Button>
                        <Button handleInput={this.inputHandler}>-</Button>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;