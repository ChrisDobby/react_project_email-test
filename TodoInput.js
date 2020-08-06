import React, { Component } from "react";
// the form input
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-gurop-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <textarea
              type="item"
              className="form-control"
              placeholder="add todo item"
              rows='8'
              cols='50'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
