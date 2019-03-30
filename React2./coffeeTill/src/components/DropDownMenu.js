import React, { Component } from 'react';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      sizes: ''};
        
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChangeSize(event) {
        this.setState({sizes: event.target.value});
      }     
    
      handleSubmit(event) {
        this.props.coffeeType(this.props.index, this.state.value)
        this.props.sizeChoice(this.props.index, this.state.sizes)
        event.preventDefault();       
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Hot drink:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="none">None</option>
                <option value="latte">Latte</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="flat-white">Flat White</option>
                <option value="mocha">Mocha</option>
                <option value="espresso">Espresso</option>
              </select>
              <select value={this.state.sizes} onChange={this.handleChangeSize}>
                <option value="none">None</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
      
    }  
export default DropDownMenu;  