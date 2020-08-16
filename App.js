import React, { Component } from "react";
import PropTypes from 'prop-types'
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    myArr: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      // needs to target the value
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      // item is taken from handlechange, your string input
      title: this.state.item
    };
    const updatedItems = [...this.state.myArr, newItem];

    this.setState({
      // empty array to be filled
      myArr: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      //this is the array
        myArr: []
    });
  };
  // handleDelete = id => {
  //   const filteredItems = this.state.items.filter(item => item.id !== id);
  //   this.setState({
  //     items: filteredItems
  //   });
  // };

  // looks for matches of email extraction
  handleMatch = id => {
    // looks at the filled empty array & filters it
    // const filteredItems = this.state.myArr.filter(item => item.id !== id);
    // finds the value in the array
    // const selectedItem = this.state.myArr.find(item => item.id === id);
    let newMatch = {
      id: this.state.id,
      title: this.state.item
    }
    let updatedNewMatch = [...this.state.item, newMatch];
    let exp = new RegExp(/([A-Za-z._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z0-9.-_]+)/, 'gi');
    // let results= names.filter(x => x.includes("s"));

    // let extraction = this.state.myArr.filter((exp) => {
    //   //  return (exp.match(item.id) === id ? item : extraction.title)  
    //   // let idEqual = item.id === id ? item : "This is extraction"  
    //   return this.myArr.some(exp)===true ? item : "This is extraction"
    // })

    let extraction = this.state.myArr.filter((item) => {
      //  return (exp.match(item.id) === id ? item : extraction.title)  
      // let idEqual = item.id === id ? item : "This is extraction"  
      return console.log('success returns 2: ', exp.test(item.updatedNewMatch));
    })

    // this.employees = emp.filter(item => !this.data.some(d => d.QID === item.QID))
    
    this.setState({
      myArr: updatedNewMatch,
      item: extraction.title,
      id: id,
      editItem: true
      });
  }
      
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              //array is here
              myArr={this.state.myArr}
              clearList={this.clearList}
              // handleDelete={this.handleDelete}
              handleMatch={this.handleMatch}
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