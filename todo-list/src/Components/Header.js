import React from 'react';
import './Styles/Header.css';

const Header = () => {
    return (
        <header>
            <h1 className='title'>To-do List</h1>
            <h3 className='subtitle'>Click on item to mark as completed.</h3>
        </header>
    )
}

export default Header;