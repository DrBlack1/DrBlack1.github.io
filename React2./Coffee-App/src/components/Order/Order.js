import React, { Component } from 'react';
import './Order.scss';

import Input from '../Input/Input';
import Item from './Item/Item';

import latte from '../images/latte.png';
import cap from '../images/cappuccino.png';
import frap from '../images/frap.png';
import coffee from '../images/coffee.png';


/* 
TODO:
 - Make each image div into one new component then pass props with coffee values
*/

class Order extends Component {

    state = {
        orderPlaceholder: 'enter order...'
    }


    render() {
        return (            
            <div className='order'>
                <Input 
                    placeholder={this.state.orderPlaceholder} 
                    handleSubmit={this.props.handleSubmit}
                    switchComponent={this.props.switchToSizeComponent}
                />

                <div className='coffee-images'>
                    <Item 
                        containerClass='latte-container' 
                        imgClass='latte' src={latte} 
                        alt='latte' 
                        name='latte'
                    />

                    <Item 
                        containerClass='cap-container' 
                        imgClass='cap' src={cap} 
                        alt='cappuccino' 
                        name='cappuccino'
                    />

                    <Item 
                        containerClass='frap-container' 
                        imgClass='frap' 
                        src={frap}
                        alt='frapuccino' 
                        name='frapuccino'
                    />
                    <Item 
                        containerClass='iced-coffee-container' 
                        imgClass='coffee' 
                        src={coffee} 
                        alt='coffee' 
                        name='iced coffee'
                    />
                </div>
            </div>
        )
    }
}

export default Order;