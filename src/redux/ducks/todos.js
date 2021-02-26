import { v4 as uuidv4 } from "uuid";

const types = {
  ADD_TODO: "todo/ADD_TODO",
  REMOVE_TODO: "todo/REMOVE_TODO",
  COMPLETE_TODO: "todo/COMPLETE_TODO",
};

export const doStartAddTodo = (todo) => ({ type: types.ADD_TODO, todo });
export const doStartRemoveTodo = (id) => ({ type: types.REMOVE_TODO, id });
export const doStartCompleteTodo = (id) => ({ type: types.COMPLETE_TODO, id });

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
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
    case types.COMPLETE_TODO:
      const newArrComplete = state.todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return { ...state, todos: newArrComplete };
    case types.REMOVE_TODO:
      const newArrRemove = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: newArrRemove };

    default:
      return state;
  }
};

export default todosReducer;
