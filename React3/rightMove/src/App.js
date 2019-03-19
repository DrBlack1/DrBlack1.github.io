import React, { Component } from 'react';
import Container from "./components/container/container";
import './App.css';
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/contact1.png";
import img6 from "./img/contact2.png";

class App extends Component {
  state = {
  house1 : {img1 : img1, 
            img2 : img2, 
            heading : '3 bedroom charater property for sale', 
            location : 'Townfield Lane, Mollington, Chester', 
            description : " AN EXCITING ADDITION TO THE PROPERTY MARKET! Ardmore is quite simply a stunning charter filled Victorian home, abundant with light filled rooms of impressive proportions. Boasting a contempoary interior the property has ...",
            added : "Added 27/11/2018 by Bradshaw Farnham & Lea, Heswall",
            price : "£500'000 - Offers Over",
            estate : img5},
  house2 : {img1 : img3,
            img2 : img4,
            heading : '4 bedroom detached house for sale', 
            location : 'Curzon Park South, Curzon Park Chester', 
            description : "Situated within a popular and convienent residential location, this 1970's, four bedroom detached house provides well proportioned accommodation that requires modernisation and has scope for further enhascement. The house is well...",
            added : "Added 21/11/2018 by Rickitt Partnership, Chester",
            price : "£499'999",
            estate : img6
          }
  }


  render() {
    return (
      <div className="App">
          <Container info = {this.state}/>
      </div>
    );
  }
}

export default App;