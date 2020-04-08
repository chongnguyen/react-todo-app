import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class FilterBar extends Component {
  render() {
    return (
      <div className='filterbar'>
        <NavLink to="/"
          exact
          className={'btn'}
        >
          All</NavLink>
        <NavLink to="/active"
          className={'btn'}
        >
          Active</NavLink>
        <NavLink to="/completed"
          className={'btn'}
        >
          Completed</NavLink>
        <span
          className='clear-complete'
          onClick={() => this.props.clearTask()}
        >
          Clear completed</span>
      </div>
    );
  }
}

export default FilterBar;