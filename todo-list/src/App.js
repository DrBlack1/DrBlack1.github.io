import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

class App extends Component {
    // initialise todos array
    state = {
        todos: []
    }

    // if the todo that was clicked has an id that is equal to todo.id then mark as complete
    markComplete = id => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            } return todo;
        })})
    }

    // only return the todos where the id does not match the id that was clicked
    handleDelete = id => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    addTodo = (value, date) => {
        const newTodo = {
            id: uuid.v4(),
            value,
            complete: false,
            date
        }
        // keep the old todos and add new todo to the top of the list
        this.setState({ 
            todos: [newTodo, ...this.state.todos]
        })
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <div className='todo-container'>
                    <Todos 
                        todos={this.state.todos} 
                        markComplete={this.markComplete} 
                        handleDelete={this.handleDelete}
                        />
                </div>
            </div>
        )
    }
}
export default App;