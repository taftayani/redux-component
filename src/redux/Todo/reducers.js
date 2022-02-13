import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

const initialState = {
  todos: [],
};
export const TodoReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    //   create todos
    case ADD_TODO:
      return {
        ...state,
        todos: { ...state.todos, payload },
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
