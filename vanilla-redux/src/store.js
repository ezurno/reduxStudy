import {
  /*combineReducers,*/ configureStore,
  createSlice,
} from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// const testReducer = createSlice({
//   name: "testReducer",
//   initialState: 0,
//   reducers: {
//     test: (state, action) => {
//       state + 1;
//     },
//   },
// }); // 가상의 reducer 추가

/*--------------두개 이상의 reducer를 관리 할 시
const allReducer = combineReducers({
  toDos,
  testReducer,
});

const store = configureStore({ reducer: allReducer });
만약 배열 데이터를 뽑을 시 const data = useSelector(state => state);로 가져왔으면
data.ReduceName.map()으로 꺼낼 수 있음
*/
export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
