import React from "react";

const CreateTodo = () => {
  return (
    <>
      <div className="content-center mt-50px">
        <div className="flex-module">
          <div className="text-left p-10px mr-20px display-grid">
            <label>Title</label>
            <input
              placeholder={"please fill form"}
              type={"text"}
              className={"type-input-text"}
            />
          </div>
          <div className="text-left p-10px mr-20px display-grid">
            <label>Status</label>
            <select
              onChange={(e) => e.target.value}
              id="select-list"
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
            className={"type-input-textarea"}
          />
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
