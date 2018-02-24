import React, { Component } from 'react';
import './../App.css';

class TodoItem extends Component {

    handleClick(id){
        this.props.onDelete(id);
    }
  render() {
    return (
        <div className="Flex">
            <li className="TodoItem">
                <strong>{this.props.todos.title}</strong>
            </li>
            <button className="Button1" onClick={this.handleClick.bind(this,this.props.todos.id)}>Delete</button>
        </div>
    );
  }
}

export default TodoItem;
