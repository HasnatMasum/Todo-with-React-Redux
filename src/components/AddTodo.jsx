import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    inputText: ""
  };

  handleChange = e => {
    this.props.data.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.data.data.inputText !== "") {
      this.props.data.addTodoItem();
    }
  };

  render() {
    //console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="blue-text">Add Todo</label>

        <input
          type="text"
          placeholder="Write todo here...."
          onChange={this.handleChange}
          value={this.props.data.data.inputText}
        />
        <button className="btn">Submit</button>
      </form>
    );
  }
}

export default AddTodo;
