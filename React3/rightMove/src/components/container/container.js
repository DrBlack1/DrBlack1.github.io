import React from "react";
import Tile from "../tile/tile.js"
import './container.css';

const Container = (props) => {
  // console.log(props.info.img1);
        return (
          <div className="Container">
              <p>"Container Component"</p>
              <Tile info = {props.info.house1}/>
              <Tile info = {props.info.house2}/>
          </div>
        );
      }

export default Container;