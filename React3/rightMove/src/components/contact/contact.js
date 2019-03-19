import React from "react";
import './contact.css';

const Contact = (props) => {
  // console.log("contact" + props)
        return (
          <div className="contact">
          <img src={props} />
          <p>Contact</p>
          </div>
        );
      }

export default Contact;