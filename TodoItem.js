import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    // your string input
    const { title, handleMatch } = this.props; // Now takes the value from the submit button
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
        <span className="mx-2 text-success" onClick={handleMatch}>
            <i className="fas fa-pen" />
          </span>
        </div>
      </li>
    );
  }
}
