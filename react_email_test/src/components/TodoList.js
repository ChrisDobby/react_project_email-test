import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <>
            {/* <TodoItem /> */}
            {/* Make this into a box instead of textarea with CSS */}
              {/* <form onSubmit={handleSubmit}> */}
              <div className="col-10 mx-auto col-md-8 mt-5">
              <TodoItem
                  key={item.id}
                  type="text"
                  className="form-control text-capitalize"
                  value={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  onChange={() => handleEdit(item.id)}
                />
              </div>
            
            </>
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

