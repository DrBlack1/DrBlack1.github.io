import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
    render() {

        const {name, order, size, sugars} = this.props;
        return (
                <ul className='order-details'>
                <h1 className='order-title'>Your Order</h1>
                    <li className='order-detail'>
                        <span className='label'>name:</span> 
                        <span className='detail'>{name}</span>
                    </li>

                    <li className='order-detail'>
                        <span className='label'>order:</span> 
                        <span className='detail'>{order}</span>
                    </li>
                    <li className='order-detail'>
                        <span className='label'>size:</span> 
                        <span className='detail'>{size}</span>
                    </li>
                    <li className='order-detail'>
                        <span className='label'>sugar(s):</span> 
                        <span className='detail'>{sugars}</span>
                    </li>
                </ul>  
        )
    }
}

export default Result;