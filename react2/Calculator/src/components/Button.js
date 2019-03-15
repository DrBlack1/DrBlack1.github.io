import React from 'react';
import '../styles/button.css';

const isOperator = (num) => {
    return !isNaN(num) || num === '.' || num === '=';
}

const Button = (props) => {
    return (
        <div 
            onClick={() => props.handleInput(props.children)} 
            className = {isOperator(props.children) ? 'button' : 'button isOperator'}
        >
            <span className='number'>{ props.children }</span>
        </div>
    );
}

export default Button;