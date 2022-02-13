import { ADD_TODO, DELETE_TODO, GET_API_TODO, UPDATE_TODO } from "./constants";

export const getApiTodoList = (todo) => ({ type: GET_API_TODO, payload: todo });
export const addTodoList = (todo) => ({ type: ADD_TODO, payload: todo });
export const updateTodoList = (todo) => ({ type: UPDATE_TODO, payload: todo });
export const deleteTodoList = (todo) => ({ type: DELETE_TODO, payload: todo });
