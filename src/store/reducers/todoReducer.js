import * as Types from "../actions/types";

const init = {
  inputText: "",
  todos: []
};

const todoReducer = (state = init, action) => {
  switch (action.type) {
    case Types.CHANGE_INPUT_TEXT:
      return Object.assign({}, state, {
        inputText: action.text
      });

    case Types.ADD_TODO:
      let newTodo = state.todos.concat(state.inputText);
      return Object.assign({}, state, {
        todos: newTodo,
        inputText: ""
      });

    case Types.DELETE_TODO:
      let newTodos = state.todos.slice();
      newTodos.splice(action.index, 1);
      return Object.assign({}, state, {
        todos: newTodos
      });
    default:
      return state;
  }
};

export default todoReducer;
