import { v4 as uuidv4 } from "uuid";

const types = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};

export const doStartAddTodo = (todo) => ({ type: types.ADD_TODO, todo });
export const doStartRemoveTodo = (id) => ({ type: types.REMOVE_TODO, id });
export const doStartCompleteTodo = (id) => ({ type: types.COMPLETE_TODO, id });

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
