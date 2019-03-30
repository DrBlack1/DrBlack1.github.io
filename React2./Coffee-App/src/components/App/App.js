import React, { Component } from 'react';
import './App.scss';

import EnterName from '../EnterName/EnterName';
import Order from '../Order/Order';
import Size from '../Size/Size';
import Sugars from '../Sugars/Sugars';
import Result from '../Result/Result';

/* 
TODO: 
    - switch ${component}isShowing to true depending on where we are in the program (DONE)
*/

class App extends Component {

    state = {
        nameIsShowing: true,
        orderIsShowing: false,
        sizeIsShowing: false,
        sugarsIsShowing: false,
        resultIsShowing: false,

        name: '',
        order: '',
        size: '',
        sugars: 0
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    switchToOrderComponent = e => {
        if(e.key === 'Enter') {
            this.setState({
                nameIsShowing: false,
                orderIsShowing: true,
                name: e.target.value
            })
        } else {
            return;
        }
    }

    switchToSizeComponent = e => {
        if(e.key === 'Enter') {
            this.setState({
                orderIsShowing: false,
                sizeIsShowing: true,
                order: e.target.value
            })
        } else {
            return;
        }
    }
    
    switchToSugarsComponent = e => {
        if(e.key === 'Enter') {
            this.setState({
                sizeIsShowing: false,
                sugarsIsShowing: true,
                size: e.target.value
            })
        } else {
            return;
        }
    }

    switchToResultsComponent = () => {
            this.setState({
                sugarsIsShowing: false,
                resultIsShowing: true,
        })
    }

    handleIncrement = () => {
        this.setState({
            sugars: this.state.sugars +1
        })
    }

    handleDecrement = () => {
        this.setState({
            sugars: this.state.sugars -1
        })
    }

    render() {
        return (
            <div className='app'>
                {this.state.nameIsShowing ? 
                    <EnterName 
                        handleSubmit={this.handleSubmit} 
                        placeholder={this.state.namePlaceholder}
                        switchToOrderComponent={this.switchToOrderComponent}
                        />
                        
                : null}

                {this.state.orderIsShowing ? 
                    <Order 
                        handleSubmit={this.handleSubmit}
                        switchToSizeComponent={this.switchToSizeComponent}
                        order={this.state.order}
                    />
                : null}

                {this.state.sizeIsShowing ?
                    <Size 
                        handleSubmit={this.handleSubmit}
                        switchToSugarsComponent={this.switchToSugarsComponent}
                        size={this.state.size}
                        /> 
                :null}

                {this.state.sugarsIsShowing ?
                    <Sugars 
                        handleSubmit={this.handleSubmit}
                        switchToResultsComponent={this.switchToResultsComponent}
                        sugars={this.state.sugars}
                        handleIncrement={this.handleIncrement}
                        handleDecrement={this.handleDecrement}
                    />
                :null}

                {this.state.resultIsShowing ?
                    <Result 
                        name={this.state.name}
                        order={this.state.order}
                        size={this.state.size}
                        sugars={this.state.sugars}
                    />
                :null}
            </div>
        )
    }
}

export default App;