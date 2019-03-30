import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
    render() {
        return (
            <div className='sugar-counter'>
            
                <div className='dec' onClick={this.props.handleDecrement}>-</div>
                    <span className='total-sugars'>{this.props.sugars} </span>
                <div className='inc' onClick={this.props.handleIncrement}>+</div> 
                
            </div>
        )
    }
}

export default Counter;