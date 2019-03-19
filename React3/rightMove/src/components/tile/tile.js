import React from "react";
import Photo from "../photo/photo.js";
import Description from "../description/description.js"

import './tile.css';

const Tile = (props) => {
  // console.log(props.info.img1);

        return (
          <div className="tile">
              <Photo info = {props.info.img1} price = {props.info.price}/>
              <Photo info = {props.info.img2}/>
              <Description 
              heading= {props.info.heading} 
              location = {props.info.location} 
              description = {props.info.description} 
              added = {props.info.added} 
              info = {props.info}
              />

          </div>
        );
      }


export default Tile;