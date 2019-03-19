import React from "react";
import Contact from "../contact/contact.js"
import './description.css';

const Description = (props) => {
  console.log("desc" + props)
        return (
          <div className="description">
          <p>{props.heading}</p>
          <p>{props.location}</p>
          <p>{props.description}</p>
          <p>{props.added}</p>
          <Contact info = {props.info}/>
          </div>
        );
      }

export default Description;