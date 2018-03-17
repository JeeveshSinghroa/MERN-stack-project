import React, { Component } from 'react';
import './../App.css';

class TodoItem extends Component {

    handleClick(id){
        this.props.onDelete(id);
    }
  render() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    <ol className='breadcrumb'>
                        <li>
                            <strong>{this.props.todos.title}</strong>
                        </li>
                    </ol>
                </div>
                <div className='col'>    
                    <button type='button' className='btn btn-danger btn-sm' 
                    onClick={this.handleClick.bind(this,this.props.todos.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
  }
}

export default TodoItem;
