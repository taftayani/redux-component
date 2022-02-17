import moment from "moment";
import { useDispatch } from "react-redux";
import ModalDetail from "../../../componentElement/Modal/modal";
import { updateTodoList } from "../../../redux/Todo/actions";

const ModalEditList = ({
  showingModal,
  valueEdit,
  setValueEdit,
  closingModal,
}) => {
  // value edit const
  const dispatch = useDispatch();
  const SubmitEdit = (e) => {
    e.preventDefault();
    var editData = {
      id: e.target.id.value,
      title: e.target.title.value,
      description: e.target.description.value,
      status: parseInt(e.target.status.value),
      createdAt: moment().format("YYYY-MM-DD h:m"),
    };
    dispatch(updateTodoList(editData));
  };
  return (
    <>
      <ModalDetail showing={showingModal} closeModal={closingModal}>
        <form onSubmit={SubmitEdit}>
          <input name="id" value={valueEdit ? valueEdit.id : ""} hidden />
          <div className="content-center mt-50px">
            <div className="flex-module">
              <div className="text-left p-10px mr-20px display-grid">
                <label>Title</label>
                <input
                  placeholder={"please fill form"}
                  type={"text"}
                  onChange={(e) =>
                    setValueEdit({
                      ...valueEdit,
                      title: e.target.value,
                    })
                  }
                  value={valueEdit ? valueEdit.title : ""}
                  name="title"
                  className={"type-input-text"}
                />
              </div>
              <div className="text-left p-10px mr-20px display-grid">
                <label>Status</label>
                <select
                  onChange={(e) =>
                    setValueEdit({
                      ...valueEdit,
                      status: e.target.value,
                    })
                  }
                  id="select-list"
                  name="status"
                  className={"select-input"}
                  value={valueEdit ? valueEdit.status : ""}
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
                onChange={(e) =>
                  setValueEdit({
                    ...valueEdit,
                    description: e.target.value,
                  })
                }
                name="description"
                value={valueEdit ? valueEdit.description : ""}
                className={"type-input-textarea"}
              />
            </div>
            <button type="submit" className="button-tab-active">
              Save
            </button>
          </div>
        </form>
      </ModalDetail>
    </>
  );
};
export default ModalEditList;
