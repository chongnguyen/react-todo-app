import React, { Component } from 'react';

class FilterBar extends Component {
  render() {
    return (
      <div className='filterbar'>
        <span
          className='btn active'
          onClick={() => this.props.filterTask()}
        >
          All</span>
        <span
          className='btn'
          onClick={() => this.props.filterTask('active')}
        >
          Active</span>
        <span
          className='btn'
          onClick={() => this.props.filterTask('completed')}
        >
          Completed</span>
        <span
          className='clear-complete'
          onClick={() => this.props.filterTask('clear')}
        >
          Clear completed</span>
      </div>
    );
  }
}

export default FilterBar;