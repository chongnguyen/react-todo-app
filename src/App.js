import React from 'react';
import './App.css';

import List from './components/List';
import Input from './components/Input';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  }

  onDoneTask = (index) => {
    let todos = this.state.todoList.map(item => {
      if (index === item.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    this.setState({
      todoList: todos
    });
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  removeTask = (index) => {
    let todos = this.state.todoList;

    for(let item in todos){
      if(todos[item].id === index){
        todos.splice(item, 1);
        break;
      }
    }

    this.setState({
      todoList: todos
    });
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  addTask = () => {
    let input = document.getElementById('ip');
    let todos = this.state.todoList;
    if (input.value) {
      let newTask = { id: Date.now(), content: input.value, isDone: false };
      todos.push(newTask);
      this.setState({
        todoList: todos
      });
    } else {
      alert('Khong duoc de trong truong!');
    }
    localStorage.setItem('todoList', JSON.stringify(todos));
    input.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1 className='heading'>Todos</h1>
        <Input addTask={this.addTask} />
        <List
          todos={this.state.todoList}
          onDoneTask={this.onDoneTask}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
