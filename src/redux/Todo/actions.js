import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

export const addTodoList = (todo) => ({ type: ADD_TODO, payload: todo });
export const updateTodoList = (todo) => ({ type: UPDATE_TODO, payload: todo });
export const deleteTodoList = (todo) => ({ type: DELETE_TODO, payload: todo });
