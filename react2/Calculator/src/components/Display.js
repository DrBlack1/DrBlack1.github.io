import React from 'react';
import '../styles/display.css';

const Display = (props) => {
    return (
        <div className='display'>
            <span className='value'>
                { props.value ? props.value : '0'}
            </span>
        </div>
    );
}

export default Display;