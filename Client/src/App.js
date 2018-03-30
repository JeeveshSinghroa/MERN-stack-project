import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

class App extends Component {

  constructor(){
    super();
    this.state={
      todos:[]
    }
  }
  
  componentDidMount(){
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({todos}));
  }
  componentWillMount(){
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({todos})
        console.log(todos);
      });
  }
  handleAddTodo(todo){
    let todo1=this.state.todos;
    todo1.push(todo);
    this.setState({todos: todo1});
    //console.log(todo);
    fetch('/api/todos',{
      method: 'POST',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({id:todo.id, title:todo.title}),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  }
  handleDelete(id, _id){
    
    fetch('/api/todos'+'/'+id,{
      method: 'delete',
      headers: {
        'Accept':'application/json, text/plain, */*',
        'Content-Type':'application/json'
      },
    })

    let todo1 = this.state.todos;
    let index = todo1.findIndex(x => x.id===id);
    todo1.splice(index,1);
    this.setState({todos: todo1});
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-9'>
            <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
          </div>
          <div className='col'/>
        </div>
        <div className='row'>
          <div className='col'/>
          <div className='col-9'>
            <Todos todos={this.state.todos} onDelete={this.handleDelete.bind(this)}/>
          </div>
          <div className='col'/>
        </div>
      </div>
    );
  }
}

export default App;