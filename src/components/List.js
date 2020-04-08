import React, { Component } from 'react';

import Task from './Task';

class List extends Component {

  render() {
    return (
      <ul className='list-todo'>
        {this.props.todos.map((item, index) => {
          return <Task
            key={index}
            content={item}
            onDoneTask={this.props.onDoneTask}
            removeTask={this.props.removeTask}>
          </Task>
        })}
      </ul>
    );
  }
}

export default List;