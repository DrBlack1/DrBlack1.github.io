import React, { Component } from 'react';
import './Sugars.scss';

// import Input from '../Input/Input';
import Counter from './Counter/Counter';
import Warning from '../Warning/Warning';

/* 
TODO 
    - Add counter component for sugars
*/

class Sugars extends Component {

    state = {
        sugarsPlaceholder: 'how many sugars...',
    }



    render() {
        return (
            <div className='sugars'>
            <h1 className='sugars-title'>How many sugars would you like?</h1>
                {/* <Input 
                    placeholder={this.state.sugarsPlaceholder} 
                    handleSubmit={this.props.handleSubmit}
                    switchComponent={this.props.switchToResultsComponent}
                /> */}

                <div className='counter'>
                    {/*input counter component here */}
                    <Counter 
                        handleIncrement={this.props.handleIncrement}
                        handleDecrement={this.props.handleDecrement}
                        sugars={this.props.sugars}
                    />
                </div>

                {this.props.sugars > 4 ? <Warning /> : 

                <div className='complete' onClick={this.props.switchToResultsComponent}>Complete order</div>
                }
            </div>
        )
    }
}

export default Sugars;