import React from "react";
import './photo.css';
import Price from "../price/price.js";

const Photo = (props) => {
// console.log(props.price);
        return (
          <div className="photo">
          <img src={props.info}/>
          <Price price = {props.price}/>
          </div>
        );
      }

export default Photo;