import React, { Component } from 'react';
import './Size.scss';
import Input from '../Input/Input';
import ItemSize from './ItemSize/ItemSize';
import icedCoffee from '../images/coffee.png';

class Size extends Component {
    state = {
        sizePlaceholder: 'choose size...',
    }

    render() {
        return (
            <div className='size'>
                <Input 
                    placeholder={this.state.sizePlaceholder} 
                    handleSubmit={this.props.handleSubmit}
                    switchComponent={this.props.switchToSugarsComponent}
                />

                <div className='sizes'>
                <ItemSize
                    containerClass='small-drink'
                    src={icedCoffee}
                    imgClass='small'
                    alt='small'
                    size='small'
                 />

                <ItemSize
                    containerClass='medium-drink'
                    src={icedCoffee}
                    imgClass='medium'
                    alt='medium'
                    size='medium'
                 />

                <ItemSize
                    containerClass='large-drink'
                    src={icedCoffee}
                    imgClass='large'
                    alt='large'
                    size='large'
                 />
                </div>
            </div>
        )   
    }
}

export default Size;