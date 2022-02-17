import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodoList } from "../../../redux/Todo/actions";
const CreateTodo = () => {
  const dispatch = useDispatch();

  const SaveSubmit = (e) => {
    e.preventDefault();
    var data = {
      id: uuidv4(),
      title: e.target.title.value,
      description: e.target.description.value,
      status: parseInt(e.target.status.value),
      createdAt: moment().format("YYYY-MM-DD h:m"),
    };
    dispatch(addTodoList(data));
  };
  return (
    <>
      <form onSubmit={SaveSubmit}>
        <div className="content-center mt-50px">
          <div className="flex-module">
            <div className="text-left p-10px mr-20px display-grid">
              <label>Title</label>
              <input
                placeholder={"please fill form"}
                type={"text"}
                name="title"
                className={"type-input-text"}
              />
            </div>
            <div className="text-left p-10px mr-20px display-grid">
              <label>Status</label>
              <select
                onChange={(e) => e.target.value}
                id="select-list"
                name="status"
                className={"select-input"}
              >
                <option value={1}>Done</option>
                <option value={0}>Undone</option>
              </select>
            </div>
          </div>
          <div className="text-left p-10px mr-20px display-grid">
            <label>Description</label>
            <input
              placeholder={"please fill form"}
              type={"textarea"}
              name="description"
              className={"type-input-textarea"}
            />
          </div>
          <button type="submit" className="button-tab-active">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTodo;
