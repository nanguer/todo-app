import types from "../../types";

export const startAddTodo = (todo) => ({ type: types.ADD_TODO, todo });
export const startRemoveTodo = (id) => ({ type: types.REMOVE_TODO, id });
export const startCompleteTodo = (id) => ({ type: types.COMPLETE_TODO, id });
