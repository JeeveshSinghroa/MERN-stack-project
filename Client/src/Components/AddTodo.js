import React, { Component } from 'react';
import './../App.css';
import uuid from 'uuid';

class AddTodo extends Component {

    constructor(){
        super();
        this.state={
            newTodo: {}
        }
    }
    handleSubmit(e){
        if(this.refs.title.value===""){
            alert('Task is required.');
        }
        else{
            this.setState({newTodo:{
                    id: uuid.v4(),
                    title: this.refs.title.value
                }
            }, function(){
                this.props.addTodo(this.state.newTodo);
            });
            this.refs.title.value='';
        }
        e.preventDefault();
    }
  render() {
      return(
        <div className="AddTodo">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-group'>
                    <label for="exampleFormControlSelect1">Please Enter Task</label><br/>
                    <input type="text" className='form-control' ref="title" /><br/>
                    <input type="submit" className="btn btn-primary mb-2" value="Add" />
                </div>
            </form>
        </div>
      );
  }
}
export default AddTodo;