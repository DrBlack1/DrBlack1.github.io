import React, { Component } from 'react';
import './App.css';

const Person = (props) => {
    return (
        <div>
            <h1>My name is { props.name }.</h1>
            <h2>I am { props.age }.</h2>
            <Pet petsName={ props.petsName } type={ props.pet }/>
        </div>
    );
}

const Pet = (props) => {
    return (
        <div>
            <h3>I have a pet { props.type } and it's name is { props.petsName }.</h3>
        </div>
    )
}
class App extends Component {
    state = {
        persons: [
            {name: 'Luke', age: 22, pet: 'dog', petsName: 'bob'},
            {name:'Tom', age:19, pet: 'cat', petsName: 'dave'},
            {name:'Joel', age:65, pet: 'rock', petsName: 'barry'}
        ],
        showPersons: false
    }
    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Sam', age: 36, pet: 'cat', petsName: 'sam'},
                {name: 'Dave', age: 41, pet:'bird', petsName: 'rocky'},
                {name: 'Bob', age: 62, pet: 'tree', petsName: 'leaf'}
            ]
        });
    }
    togglePersonHandler = () => {
        let visibility = this.state.showPersons;
        this.setState({
            showPersons: !visibility
        })
    }
    render() {
        return (
            <div className='container'>
            {this.state.showPersons ? 
                this.state.persons.map(person => {
                    return (
                        <Person 
                            name={person.name} 
                            age={person.age} 
                            pet={person.pet} 
                            petsName={person.petsName} />
                    );
                })
            : null}
                <button onClick={ this.switchNameHandler }>Button</button>
                <button onClick={this.togglePersonHandler}>Show</button>
            </div>
        );
    }
}
export default App;