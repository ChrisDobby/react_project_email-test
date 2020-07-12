import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          
        </div>
      </li>
    );
  }
}
