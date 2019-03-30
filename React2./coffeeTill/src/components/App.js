import React, { Component } from 'react';
import Header from './Header'
import AddPersonForm from './AddPersonForm'
import Name from './Name';

class App extends Component {
    state = {
      person : [
        {
          name: "Patto",
          id: 1,
          coffee :"",
          size:"",
          extras: ""

        },
        {
          name: "Cornfake",
          id: 2,
          coffee :"",
          size:"",
          extras: ""
        }
      ]
      
    }

    prevPersonId = 2

    handleRemovePlayer = (id) => {
      console.log('here')
      this.setState( prevState => {
        return {
          person: prevState.person.filter(p => p.id !== id)
        }
      })
      
    }
    handleSizeChoice = (index, type) =>{
      this.setState(prevState =>{
        return{
          size : prevState.person[index].size = type
          
        }
      })}
    handleCoffeeType = (index, type) =>{
      this.setState(prevState =>{
        return{
          coffee : prevState.person[index].coffee = type
          
        }
      })}

    handleCoffeeChange = (index) =>{
      this.setState(prevState =>{
        return{
        coffee: prevState.person[index].coffee = "",
        size: prevState.person[index].size = ""
        }
      })
    }

    handleAddPerson = (name) =>{
   
      this.setState(prevState => {
        return{
        person : [
          ...prevState.person,
          {
            name,
            id: this.prevPersonId +=1,
            coffee: "",
            size: ""
          }
        ]
      }})
    }

  render() {
    return (
      <div className = "App" >
        <Header />

        {this.state.person.map((people, index ) =>
       
        <Name 

            name={people.name}
            size = {people.size}
            id={people.id}
            key = {people.id.toString()}            
            removePlayer={this.handleRemovePlayer} 
            index = {index}
            coffee = {people.coffee}
            coffeeChange = {this.handleCoffeeChange}
            coffeeType = {this.handleCoffeeType}
            sizeChoice = {this.handleSizeChoice}

        />
        )}
        <AddPersonForm 
          addPerson = {this.handleAddPerson}
        />
      </div>
    );
  }
}



export default App;
