import React, {Component} from 'react';
import Order from './Order'

class Name extends Component{
  
  render(){
  
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id) }>✖</button>
   
          
          { this.props.name + " ---  Order: " + this.props.coffee + "  ---  Size: " + this.props.size}
          
        </span>
      <Order 
            name = {this.props.name}
            index = {this.props.index}
            coffee = {this.props.coffee}
            size = {this.props.size}
            coffeeChange = {this.props.coffeeChange}
            coffeeType = {this.props.coffeeType}
            sizeChoice = {this.props.sizeChoice}
      />
      </div>
    );
  }
}
export default Name;  