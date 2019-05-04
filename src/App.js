import React, { Component } from "react";
import { connect } from "react-redux";

import {
  changeInput,
  addTodoItem,
  deleteTodo
} from "./store/actions/todoAction";

// Import custom component
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  // state = {
  //   todos: [
  //     { id: 1, content: "Buy some milk" },
  //     { id: 2, content: "Buy some paper" }
  //   ]
  // };

  handleDelete = id => {
    // let todos = this.state.todos.filter(todo => {
    //   return todo.id !== id;
    // });
    // this.setState({
    //   todos
    // });
  };

  addTodo = todo => {
    // todo.id = Math.random();
    // let todos = [...this.state.todos, todo];
    // this.setState({
    //   todos
    // });
  };

  render() {
    //console.log(this.props);
    return (
      <div className="container">
        <h1 className="center-align blue-text darken-2">My Todos.</h1>
        <Todos deleteTodo={this.handleDelete} data={this.props} />
        <AddTodo addTodo={this.addTodo} data={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.todos
  };
};

export default connect(
  mapStateToProps,
  { changeInput, addTodoItem, deleteTodo }
)(App);
