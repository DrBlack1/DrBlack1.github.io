import React, { Component } from 'react';
import './Styles/TodoItem.css';

class TodoItem extends Component {
    render() { 
        // destructure this.props.todo
        const { id, value, date } = this.props.todo;

        return (  
            <div className={this.props.todo.completed ? 'completed todo-items' : 'todo-items'}>
            {/* binding this and passing id up to the todos component*/}
                <p 
                    className='todo-item' 
                    onClick={ this.props.markComplete.bind(this, id)} 
                    onDoubleClick={ this.props.handleDelete.bind(this, id)} >
                    { value }
                    <span className='date'>{ date }</span>
                </p>
            </div>
        );
    }
}
 
export default TodoItem;