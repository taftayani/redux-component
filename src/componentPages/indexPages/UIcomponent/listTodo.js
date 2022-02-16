/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonComponent from "../../../componentElement/elements/button";
const ListTodo = ({ todo }) => {
  return (
    <>
      {todo
        ? todo.map((list, index) => {
            return (
              <div key={index} className="flex-module content-center mt-50px">
                <img src="/img-todo/check-done.svg" />
                <div className="text-left w-300px display-grid">
                  <label className={"header-list"}>{list.title}</label>
                  <label className={"description-list"}>
                    {list.description}
                  </label>
                  <label className={"description-list"}>{list.createdAt}</label>
                </div>
                <ButtonComponent
                  // onClick={() => showingModal(todo)}
                  classButton={"detail-btn"}
                >
                  Detail
                </ButtonComponent>
              </div>
            );
          })
        : ""}
    </>
  );
};
export default ListTodo;
