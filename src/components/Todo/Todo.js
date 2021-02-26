import React from "react";
import { connect } from "react-redux";
import { doStartRemoveTodo, doStartCompleteTodo } from "../../ducks/todos";
import "./todo.css";

const Todo = ({ todo: { id, name, completed }, removeTodo, completeTodo }) => {
  return (
    <div className="todo__container">
      <div
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name}
      </div>

      <div>
        <button className="button" onClick={() => removeTodo(id)}>
          Remove
        </button>
        <button className="button" onClick={() => completeTodo(id)}>
          {!completed ? "Done!" : "Not Done"}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(doStartRemoveTodo(id)),
  completeTodo: (id) => dispatch(doStartCompleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
