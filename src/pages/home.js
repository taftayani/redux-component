/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getApiTodoList } from "../redux/Todo/actions";
import ButtonComponent from "../componentElement/elements/button";
import CreateTodo from "../componentPages/indexPages/UIcomponent/createTodo";
import ListTodo from "../componentPages/indexPages/UIcomponent/listTodo";
import {
  BtnClick,
  FilterDone,
  FilterUndone,
} from "../componentPages/LogicComponent";
const Home = () => {
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
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <>
      <div className="App">
        <div className="flex-module content-center">
          <ButtonComponent
            classButton={`mr-10px ${BtnClick(btnTab === "add")}`}
            onClick={() => setBtnTab("add")}
          >
            Add Task
          </ButtonComponent>
          <ButtonComponent
            classButton={`mr-10px ${BtnClick(btnTab === "undone")}`}
            onClick={() => setBtnTab("undone")}
          >
            Undone task
          </ButtonComponent>
          <ButtonComponent
            classButton={`mr-10px ${BtnClick(btnTab === "done")}`}
            onClick={() => setBtnTab("done")}
          >
            Done task
          </ButtonComponent>
          {/* modal wrrping detail  */}
        </div>
        {/* content todo list  */}
        {btnTab === "add" && <CreateTodo />}
        {btnTab === "done" && <ListTodo todo={FilterDone(todos)} />}
        {btnTab === "undone" && <ListTodo todo={FilterUndone(todos)} />}
      </div>
    </>
  );
};

export default Home;
