import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className='input-wrapper'>
        <input id='ip' className='input-field' type='text' placeholder='+ add new task'/>
        <button className='btn-add' onClick={() => this.props.addTask()}>Add</button>
      </div>
    );
  }
}

export default Input;