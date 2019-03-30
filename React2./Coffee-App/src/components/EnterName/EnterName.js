import React, { Component } from 'react';
import './EnterName.scss';
import Input from '../Input/Input';
import logo from '../images/cafe.png';

class EnterName extends Component {

    state = {
        nameInput: '',
        namePlaceholder: 'enter name...',
    }

    handleInput = e => {
        this.setState({
            nameInput: e.target.value
        })
    }

    render() {
        return (
            <div className='enter-name'>
            <img src={logo} className='logo' alt='logo'/>
                <Input 
                    handleSubmit={this.props.handleSubmit} 
                    placeholder={this.state.namePlaceholder} 
                    value={this.state.nameInput}
                    handleInput={this.handleInput}
                    switchComponent={this.props.switchToOrderComponent}
                    />
            </div>
        )   
    }

}

export default EnterName;