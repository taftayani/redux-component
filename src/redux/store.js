import persistReducer from "redux-persist/es/persistReducer";
import { TodoReducers } from "./Todo/reducers";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
const persistConfigTodo = {
  key: "root",
  storage,
  whitelist: ["reducersTodos"],
};
const persistReducers = persistReducer(
  persistConfigTodo,
  combineReducers({
    reducersTodos: TodoReducers,
  })
);
export const store = createStore(
  persistReducers,
  compose(applyMiddleware(thunk), devToolsEnhancer())
);
export const persistor = persistStore(store);
