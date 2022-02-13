/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodoList, getApiTodoList } from "./redux/Todo/actions";
import ButtonComponent from "./component/elements/button";
import ListTodo from "./componentPages/indexPages/listTodo";

const App = () => {
  // state management button
  const [btnTab, setBtnTab] = useState("done");
  // redux implement
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducersTodos);
  // redux implement
  const getAPI = async () => {
    const response = await axios.get(process.env.REACT_APP_URL_API);
    if (todos.length !== 0) {
      dispatch(getApiTodoList(response.data));
    }
  };
  // filter done task
  const FilterDone = todos
    ? todos.todos
        .filter((list) => {
          return list.status === 1;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateFirst - dateSecond;
        })
    : "";
  // filter undone task
  const FilterUndone = todos
    ? todos.todos
        .filter((list) => {
          return list.status === 0;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateFirst - dateSecond;
        })
    : "";
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <div className="App">
        {console.log("tes", todos)}
        <h1>TES GET API</h1>
        <div className="flex-module content-center">
          <ButtonComponent
            classButton={`mr-10px ${
              btnTab === "add" ? "button-tab-active" : "button-tab "
            }`}
            onClick={() => setBtnTab("add")}
          >
            Add Task
          </ButtonComponent>
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
        {/* content todo list  */}
        {btnTab === "done" && <ListTodo todo={FilterDone} />}
        {btnTab === "undone" && <ListTodo todo={FilterUndone} />}
      </div>
    </>
  );
};

export default App;
