import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    // array to passed list
    const { myArr, clearList, title} = this.props;
    
    return (
        <ul className="list-group my-5">
          <h3 className="text-center">todo list</h3>
          {myArr.map(item => {

            return (
              <React.Fragment key={item.id}>
                <div className="col-10 mx-auto col-md-8 mt-5">
                <TodoItem
                    // key={item.id}
                    // type="title"
                    // className="form-control"
                    title={ "This is todoList output " + item.title}
                    />
                </div>
                </React.Fragment>
            );
          })}
          
          <button
            type="button"
            className="btn btn-danger btn-block mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        </ul>
    );
  }
}

