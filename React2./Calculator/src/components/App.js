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
        // comma serparated input, breaks operators for the time being
        // let toNumber = Number(concat.replace(/\D/g, ''));
        // let commaSeperatedNum = toNumber.toLocaleString();
        const concat = this.state.input + num;
        
        this.setState({
            input: concat
        })
    }

    resetHandler = () => {
        this.setState({
            input: ''
        })
    }

    numberWithCommas(num) {
        // add commas
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    handleBackspace = () => {
        this.setState({
            input: this.state.input.split('').slice(0, -1).join('')
        })
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
                    <div className='btns'>
                        <Display value={this.state.input}/>
                    </div>
                    <div className='btns'>
                        <ClearButton resetHandler={this.resetHandler}>reset</ClearButton>
                        <Button handleInput={() => this.handleBackspace()}>ce</Button>
                    </div>
                    <div className='btns'>
                        <Button handleInput={this.inputHandler}>7</Button>
                        <Button handleInput={this.inputHandler}>8</Button>
                        <Button handleInput={this.inputHandler}>9</Button>
                        <Button handleInput={this.inputHandler}>/</Button>
                    </div>
                    <div className='btns'>
                        <Button handleInput={this.inputHandler}>4</Button>
                        <Button handleInput={this.inputHandler}>5</Button>
                        <Button handleInput={this.inputHandler}>6</Button>
                        <Button handleInput={this.inputHandler}>*</Button>
                    </div>
                    <div className='btns'>
                        <Button handleInput={this.inputHandler}>1</Button>
                        <Button handleInput={this.inputHandler}>2</Button>
                        <Button handleInput={this.inputHandler}>3</Button>
                        <Button handleInput={this.inputHandler}>+</Button>
                    </div>
                    <div className='btns'>
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