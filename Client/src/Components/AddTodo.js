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
            <h2>Add Task</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="Div">
                    <label className="App-title">Task</label><br/>
                    <input className="Input" type="text"  ref="title" /><br/>
                    <input className="Input" type="submit" value="Add" />
                </div>
            </form>
        </div>
      );
  }
}
export default AddTodo;