import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo";
import types from "../utils/types";
import { connect } from "react-redux";
import {
  doStartAddTodo,
  getCompletedTodos,
  getPendingTodos,
} from "../../redux/ducks/todos";

const TodoContainer = ({ todos, addTodo, completedTodos, pendingTodos }) => {
  const [todo, setTodo] = useState("");
  const [displayedTodos, setDisplayedTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    if (showCompleted) {
      setShowPending(false);
    }
    if (showPending) {
      setShowCompleted(false);
    } else {
      setShowPending(false);
      setShowCompleted(false);
      setDisplayedTodos(todos);
    }
  }, [showCompleted, showPending, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const handleDisplay = (type) => {
    if (type === types.COMPLETED) {
      setDisplayedTodos(completedTodos);
    } else if (type === types.PENDING) {
      setDisplayedTodos(pendingTodos);
    } else {
      setDisplayedTodos(todos);
    }
  };

  return (
    <>
      {todos &&
        todos.length === 0 &&
        "Nothing to show! try adding some todos.."}
      {displayedTodos.map((todo) => (
        <Todo key={uuidv4()} todo={todo} />
      ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="button">Add Todo!</button>
      </form>
      <div>
        <button
          disabled={!completedTodos.length > 0}
          className="button btn-sec"
          onClick={() => handleDisplay(types.COMPLETED)}
        >
          Show Completed
        </button>
        <button
          className="button btn-sec"
          onClick={() => handleDisplay(types.PENDING)}
          disabled={!pendingTodos.length > 0}
        >
          Show Pending
        </button>
        <button
          disabled={todos.length === 0}
          className="button btn-sec"
          onClick={() => handleDisplay(types.ALL)}
        >
          Show All
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  completedTodos: getCompletedTodos(state),
  pendingTodos: getPendingTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(doStartAddTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
