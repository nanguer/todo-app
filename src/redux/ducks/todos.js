import { v4 as uuidv4 } from "uuid";
import { createSelector } from "reselect";
//TYPES
const types = {
  ADD_TODO: "todo/ADD_TODO",
  REMOVE_TODO: "todo/REMOVE_TODO",
  COMPLETE_TODO: "todo/COMPLETE_TODO",
  SHOW_COMPLETED: "todo/SHOW_COMPLETED",
  SHOW_PENDING: "todo/SHOW_PENDING",
};

//ACTIONS
export const doStartAddTodo = (todo) => ({ type: types.ADD_TODO, todo });
export const doStartRemoveTodo = (id) => ({ type: types.REMOVE_TODO, id });
export const doStartCompleteTodo = (id) => ({ type: types.COMPLETE_TODO, id });
export const doShowCompleted = () => ({ type: types.SHOW_COMPLETED });
export const doShowPending = () => ({ type: types.SHOW_PENDING });

const initialState = {
  todos: [],
};

//SELECTORS
const todosSelector = (state) => state.todos;

export const getCompletedTodos = createSelector(todosSelector, (todos) =>
  todos.filter(({ completed }) => completed)
);
export const getPendingTodos = createSelector(todosSelector, (todos) =>
  todos.filter(({ completed }) => !completed)
);

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
