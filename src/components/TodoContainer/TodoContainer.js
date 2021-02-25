import React, { useReducer, useState } from "react";
import { Todo } from "../Todo";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length + 1, name: action.todo, completed: false },
      ];
    case "COMPLETE_TODO":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

//MOCK DATA
// { id: 1, name: "clean apartment", completed: false },
// { id: 2, name: "buy food", completed: false },
// { id: 3, name: "walk dog", completed: false },
// { id: 4, name: "cook dinner", completed: false },

const TodoContainer = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo });
    setTodo("");
  };

  return (
    <>
      {todos.length === 0 && "Nothing to show! try adding some todos.."}
      {todos.map((todo) => (
        <Todo key={`${todo.id}${todo.name}`} todo={todo} dispatch={dispatch} />
      ))}
      <form onSubmit={handleSubmit}>
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

export default TodoContainer;
