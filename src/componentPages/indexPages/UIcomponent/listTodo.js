/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ButtonComponent from "../../../componentElement/elements/button";
import { ShowingModal } from "../../LogicComponent";
import ModalEditList from "./modalEdit";
const ListTodo = ({ todo }) => {
  const [showingDetail, setShowingDetail] = useState();
  const ClickModal = (id) => {
    setShowingDetail(id);
  };
  return (
    <>
      {todo
        ? todo.map((list, index) => {
            return (
              <>
                <div key={index} className="flex-module content-center mt-50px">
                  <img src="/img-todo/check-done.svg" />
                  <div className="text-left w-300px display-grid">
                    <label className={"header-list"}>{list.title}</label>
                    <label className={"description-list"}>
                      {list.description}
                    </label>
                    <label className={"description-list"}>
                      {list.createdAt}
                    </label>
                  </div>
                  <ButtonComponent
                    onClick={() => ClickModal(list)}
                    classButton={"detail-btn"}
                  >
                    Detail
                  </ButtonComponent>
                </div>
                <ModalEditList
                  valueEdit={showingDetail}
                  setValueEdit={setShowingDetail}
                  closingModal={() => setShowingDetail()}
                  showingModal={ShowingModal(showingDetail === todo.id)}
                />
              </>
            );
          })
        : ""}
    </>
  );
};
export default ListTodo;
