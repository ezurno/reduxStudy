import { createAction, createReducer } from "@reduxjs/toolkit";
import { createStore } from "redux";

const addToDo = createAction("ADD");
const delToDo = createAction("DEL");
// toolkit 으로 addToDo의 type이 ADD 인 action 생성, payload는 입력 하는 값이 됨

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case delToDo.type:
//       console.log(action);
//       return state.filter((toDo) => toDo.id !== parseInt(action.payload));
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
    // redux toolkit 에서는 mutate도 가능. 다만 return은 X
  },
  [delToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    // mutate 아닌 새로운 값을 리턴 할 시에는 return 사용 가능
  },
});
// createReducer 의 첫 args는 initialStateValue

export const actionCreators = {
  addToDo,
  delToDo,
};

const store = createStore(reducer);

export default store;
