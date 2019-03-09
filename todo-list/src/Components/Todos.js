import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todos extends Component {
    render() { 
        // map through all the todos and create a todoitem for each one
        return this.props.todos.map(todo => (
            <TodoItem 
                todo={todo} 
                key={todo.id} 
                markComplete={this.props.markComplete} 
                handleDelete={this.props.handleDelete}/>
        ));
    }
}
 
export default Todos;