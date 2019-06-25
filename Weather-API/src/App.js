import React, { Component } from 'react';
import InputBox from './Components/InputBox';
import Weather from './Components/Weather';
import Card from './Components/Crad';
import './App.css';





const apiKey = "a988be4b6c6b891e961dc916eb4897f9"

class App extends Component {

  state = {
    temperature:'',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  };

  

  getData = async (e) =>{
    
    const textField = e.target.textField.value;
    e.preventDefault();


    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textField}&APPID=${apiKey}`);
    
  
     const result = await api_call.json();

    //  console.log(result);

    // this.setState({weatherLog:result});

    

    //  console.log(result);

     this.setState({
       temperature: result.main.temp,
      city: result.name,
      country: result.sys.country,
      humidity: result.main.humidity,
      description: result.weather[0].description,
      error: ""
    })

   
    
  };
  
  render() {
    return (
      <div>
        
        <InputBox testing={this.getData} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />

       

        <div className="container">
          <Card />
          <Card />
          <Card />
           
        </div>


      </div>
    );
  }
}



export default App;
