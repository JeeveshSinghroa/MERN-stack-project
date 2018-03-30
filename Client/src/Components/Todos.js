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
      <div>
        <div>
          <h5 className='text-center'>Tasks</h5>
        </div>    
        <div>
          {todoItems}
        </div>
      </div>
    );
  }
}

export default Todos;
