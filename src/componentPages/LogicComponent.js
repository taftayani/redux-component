// filter expression
export const FilterDone = (todos) => {
  return todos !== ""
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
};
export const FilterUndone = (todos) => {
  return todos !== ""
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
};
// button tab, if there are some page have a button tab
export const BtnClick = (btn) => {
  return btn === true ? "button-tab-active" : "button-tab";
};
// button showing modal
export const ShowingModal = (btn) => {
  return btn === true ? true : false;
};
