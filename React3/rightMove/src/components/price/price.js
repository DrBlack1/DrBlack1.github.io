import React from "react";
import './price.css';

const Price = (props) => {
// console.log(props);
        return (
          <div className="price">
          <p>
          {props.price}
          </p>
          </div>
        );
      }


export default Price;