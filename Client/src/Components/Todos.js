import React, { Component } from 'react';
import './../App.css';
import TodoItem from './TodoItem'

class Todos extends Component {

    handleDelete(id){
        this.props.onDelete(id);
    }
  render() {
      let todoItems;
      if(this.props.todos){
          todoItems = this.props.todos.map(todo => {
            return(
                <TodoItem todos={todo} key={todo.id} onDelete={this.handleDelete.bind(this)}/>
            );
          });
      }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'/>
          <div className='col'>
          <h3>Tasks</h3>
          </div>
          <div className='col'/>
        </div>
        <div className='row'>
          <div className='col'>
            {todoItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
