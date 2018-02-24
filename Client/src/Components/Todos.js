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
      <div className="Todos">
      <div className="TodoHead">
        <h3> Your To Do list.</h3>
        </div>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
