import React from "react";

const TodoItem = ({title}) => {
  
    // your string input
    // Now takes the value from the submit button
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between my-2">
          <h6>{title}</h6>
        </li>
      </div>
    );
  }

  export default TodoItem;
