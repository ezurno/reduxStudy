import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const delToDo = createAction("DEL");
// toolkit 으로 addToDo의 type이 ADD 인 action 생성, payload는 입력 하는 값이 됨

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case delToDo.type:
      console.log(action);
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  delToDo,
};

const store = createStore(reducer);

export default store;
