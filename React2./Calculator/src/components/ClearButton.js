import React from 'react'
import '../styles/clearbtn.css';

const ClearButton = (props) => {
    return (
        <div className='clear-btn' onClick={ props.resetHandler }>
            <span className='clear-val'> { props.children } </span>
        </div>
    );
}

export default ClearButton;