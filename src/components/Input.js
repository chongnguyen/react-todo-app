import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className='input-wrapper'>
        <input 
          id='ip' className='input-field' 
          type='text' placeholder='+ add new task'
          onKeyDown={(event) => {
            if(event.keyCode === 13){
              return this.props.handlingKeyUp();
            }
          }}
        />
        <button 
          className='btn-add' 
          onClick={() => this.props.addTask()}
        >Add</button>
      </div>
    );
  }
}

export default Input;