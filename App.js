import React, { Component, useState } from "react";
import PropTypes from 'prop-types'
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    myArr: [],
    id: uuid(),
    items: ""
  };
  handleChange = (e, value, name)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.state.setEventValue()
    
    this.setState({
      // needs to target the value
        items: setEventValue(value,name)
    },
     () => console.log("This is handleChange " + this.items)
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: this.state.id,
      // item is taken from handlechange, your string input
      title: this.state.items
    };
    let updatedItems = [...this.state.myArr, newItem];
    let updatedMatch = updatedItems;
    this.setState({
      // empty array to be filled
      myArr: updatedMatch,
      // empty string with new text added in to text box
      items: "",
      // id = to new id
      id: uuid()
    }
    // () => console.log(this.state)
    );
  };

  clearList = () => {
    this.setState({
      //this is the array
        myArr: []
    });
  };

  // looks for matches of email extraction
  handleMatch = (value,name, id) => {
    let stringArr = this.state.updatedstrValue.toLowerCase();
    let exp = /([A-Za-z._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/gi;
    // const titleText = this.state.myArr.find((item) => item.id === id).title;
    // let foundArray;
    // while ((foundArray = exp.exec(stringArr)) !== null) {
    //     console.log(`Found ${foundArray[0]}`);
    // }
    let myResult = stringArr.match(exp);
    let setValMatch = this.state.setEventValue([myResult].value);
    let myFilterMatch = this.state.setEventValue.filter((item) => {
        return item.includes(item.id === id).item
    })
    
    console.log(myResult);
    this.setState({
      items: myResult.title,
      id: id
      });
  }
      
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center">todo input</h3>
            <TodoInput
              items={this.state.items}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            //   editItem={this.state.editItem}
            />
            <TodoList
              //array is here
              myArr={this.state.myArr}
              clearList={this.clearList}
              // handleDelete={this.handleDelete}

            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
  App.propTypes = {
  title: PropTypes.string.isRequired
}

