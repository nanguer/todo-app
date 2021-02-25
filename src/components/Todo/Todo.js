import React from "react";
import "./todo.css";

const Todo = ({ todo: { id, name, completed }, dispatch }) => {
  const handleCompleted = (id) => {
    dispatch({ type: "COMPLETE_TODO", id });
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

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
        <button className="button" onClick={() => handleRemove(id)}>
          Remove
        </button>
        <button className="button" onClick={() => handleCompleted(id)}>
          {!completed ? "Done!" : "Not Done"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
