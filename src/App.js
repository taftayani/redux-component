import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodoList } from "./redux/Todo/actions";
import { ADD_TODO } from "./redux/Todo/constants";
import ButtonComponent from "./component/elements/button";

const App = (e) => {
  // state management
  const [btnTab, setBtnTab] = useState("done");
  // redux implement
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducersTodos);
  const getAPI = async () => {
    const response = await axios.get(process.env.REACT_APP_URL_API);
    console.log("tesapi", response.data);
    if (todos.length !== 0) {
      dispatch(addTodoList(response.data));
    }
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <div className="App">
        {console.log("reduxget", todos)}
        <h1>TES GET API</h1>
        {todos.todos
          ? todos.todos.payload.map((todoList, index) => (
              <>
                <label>{todoList.title}</label>
              </>
            ))
          : ""}
        <div className="flex-module content-center">
          <ButtonComponent
            classButton={`mr-10px ${
              btnTab === "undone" ? "button-tab-active" : "button-tab "
            }`}
            onClick={() => setBtnTab("undone")}
          >
            Undone task
          </ButtonComponent>
          <ButtonComponent
            classButton={`${
              btnTab === "done" ? "button-tab-active" : "button-tab "
            }`}
            onClick={() => setBtnTab("done")}
          >
            Done task
          </ButtonComponent>
          {/* modal wrrping detail  */}
        </div>
      </div>
    </>
  );
};

export default App;
