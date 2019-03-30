import React from 'react'
import './Input.scss';

const Input = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                className='input-box'  
                type='text'
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleInput}
                onKeyPress={props.switchComponent}
                autoFocus
                />
            </form>
    );
}

export default Input;