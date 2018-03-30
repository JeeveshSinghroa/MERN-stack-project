import React, { Component } from 'react';
import './../App.css';

class TodoItem extends Component {

    handleClick(id){
        this.props.onDelete(id);
    }
  render() {
    return (
        <div>
            <ul className='list-group'>
                <button type='button' className='list-group-item list-group-item-action' 
                data-toggle="tooltip" data-placement="right" title="Click to Delete Task" 
                onClick={this.handleClick.bind(this,this.props.todos.id,this.props.todos._id)}>
                    {this.props.todos.title}
                </button>

            </ul>
        </div>
    );
  }
}

export default TodoItem;
