import { ADD_TODO, DELETE_TODO, GET_API_TODO, UPDATE_TODO } from "./constants";

const initialState = {
  todos: [],
};
export const TodoReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    //   get API todos
    case GET_API_TODO:
      return {
        ...state,
        todos: payload,
      };
    // added API todos
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(payload),
      };
    //   update todos
    case UPDATE_TODO:
      return {};
    //   delete todos
    case DELETE_TODO:
      return {};
    default:
      return state;
  }
};
