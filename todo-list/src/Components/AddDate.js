import React, { Component } from 'react'
import './Styles/AddDate.css';

class AddDate extends Component {
    render() {
        return (
            <input 
                type='text' 
                className ={this.props.handleDateValidation()}
                placeholder = 'date...'
                value = {this.props.value}
                maxLength = {8}
                onChange = {this.props.handleDate}
            />
        )
    }
}

export default AddDate;