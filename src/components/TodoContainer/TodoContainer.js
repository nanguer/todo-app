import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo";
import { connect } from "react-redux";
import { startAddTodo } from "../actions/todos";

const TodoContainer = ({ todos, addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <>
      {todos &&
        todos.length === 0 &&
        "Nothing to show! try adding some todos.."}
      {todos.map((todo) => (
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
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(startAddTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
