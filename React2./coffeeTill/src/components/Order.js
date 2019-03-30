import React from 'react';
import DropDownMenu from './DropDownMenu'


const Counter = ({coffee, index, coffeeChange, name, coffeeType, size, sizeChoice }) =>{
  
   
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick = {()=> coffeeChange(index)}> - </button>
         
          <DropDownMenu  
              index = {index}
              name = {name}
              coffee = {coffee}
              coffeeType = {coffeeType}
              size = {size}
              sizeChoice = {sizeChoice}
          /> 
        </div>
      );
    }

export default Counter    
