
import React, { Component } from 'react';
import './Styles/AddTodo.css';

import AddDate from './AddDate';

class AddTodo extends Component {
    state = {
        value: '',
        dateInput: ''
    }

    handleInput = e => {
        // get value from input and change the state to that value
        this.setState({ 
            value: e.target.value
        })
    }
    
    handleDate = (e) => {
        this.setState({
            dateInput: e.target.value
        })
    }

    handleDateValidation = () => {
        return this.state.dateInput.length ? 'date-input' : 'date-input empty'
    }

    handleInputValidation = () => {
        return this.state.value.length ? 'input-box' : 'input-box empty'
    }

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.value.length) return;
        if (!this.state.dateInput.length) return;
        // pass the inputted value up to the app
        this.props.addTodo(this.state.value, this.state.dateInput);
        // clear input
        this.setState({ 
            value: '',
            dateInput: '',
        });
    }
    
    render() { 
        return (  
            <form onSubmit={this.handleSubmit}>
                <input 
                    className={this.handleInputValidation()} 
                    type='text' 
                    placeholder='add todo...' 
                    value={this.state.value} 
                    onChange={this.handleInput}
                    />
                <AddDate 
                    handleDate={this.handleDate} 
                    value={this.state.dateInput}
                    handleDateValidation={this.handleDateValidation}
                    />
                <button className='add-btn' onClick={this.handleSubmit}>Add</button>
            </form>
        );
    }
}
 
export default AddTodo;