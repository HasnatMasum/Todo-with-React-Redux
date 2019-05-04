import React from "react";
const Todos = props => {
  //console.log(props);
  let { todos } = props.data.data;
  return todos.length ? (
    todos.map((todo, index) => {
      return (
        <ul className="collection" key={index}>
          <li className="collection-item  valign-wrapper row">
            <div className="col m10">{todo}</div>
            <div className="col m2">
              <span
                className="red btn right btn-small "
                onClick={() => props.data.deleteTodo(index)}
              >
                Delete
              </span>
            </div>
          </li>
        </ul>
      );
    })
  ) : (
    <h5 className="center-align red-text">You have no Todos in the list.</h5>
  );
};

export default Todos;
