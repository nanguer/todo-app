import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            name: action.todo,
            completed: false,
          },
        ],
      };
    case "COMPLETE_TODO":
      const newArr = state.todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return { ...state, todos: newArr };
    case "REMOVE_TODO":
      const newState = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: newState };

    default:
      return state;
  }
};

export default todosReducer;
