import React, { Component } from 'react';
import check from './img/check.png';
import circle from './img/circle.png';

class Task extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    let status = this.props.content.isDone ?
      { src: check, active: ' active' } :
      { src: circle, active: '' };
    let { id } = this.props.content;
    return (
      <li className={'task' + status.active}>
        <img
          className='radio-btn'
          src={status.src} alt='checked'
          onClick={() => this.props.onDoneTask(id)}
        />
        {this.props.content.content}
        <span
          className='btn-remove'
          title='remove task'
          onClick={() => this.props.removeTask(id)}>&times;</span>
      </li>
    );
  }
}

export default Task;