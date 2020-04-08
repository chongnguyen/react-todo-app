import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import List from './components/List';
import Input from './components/Input';
import FilterBar from './components/FilterBar';

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

    for (let item in todos) {
      if (todos[item].id === index) {
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

  clearTask = () => {
    let isRemove = window.confirm('Are you sure you want to delete all tasks ?');

    if (isRemove) {
      this.setState({ todoList: [] });
      localStorage.setItem('todoList', []);
    }

  }

  handlingKeyUp = () => {
    this.addTask();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1 className='heading'>Todos</h1>
          <Input
            handlingKeyUp={this.handlingKeyUp}
            addTask={this.addTask}
          />
          <Switch>
            <Route exact path='/'>
              <List
                todos={this.state.todoList}
                onDoneTask={this.onDoneTask}
                removeTask={this.removeTask}
              />
            </Route>
            <Route path='/active'>
              <List
                todos={
                  this.state.todoList.filter(item => !item.isDone)
                }
                onDoneTask={this.onDoneTask}
                removeTask={this.removeTask}
              />
            </Route>
            <Route path='/completed'>
              <List
                todos={
                  this.state.todoList.filter(item => item.isDone)
                }
                onDoneTask={this.onDoneTask}
                removeTask={this.removeTask}
              />
            </Route>
          </Switch>
          <FilterBar clearTask={this.clearTask} />
        </div>
      </Router>

    );

  }
}

export default App;
