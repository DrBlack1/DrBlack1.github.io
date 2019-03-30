import React from 'react';
import './Warning.scss';

import skull from '../images/skull.svg';

const Warning = () => {
    return (
        <div className='warning'>
            Do you want to die?
            <div className='img-container'>
                <img src={skull} className='skull' alt='skull'/>
            </div>
        </div>
    )
}

export default Warning;