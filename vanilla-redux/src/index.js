import { createStore } from "redux";

//vanilla JS redux
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("h1");

const countModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else return count;
};
// redux 내에선 reducer 라고 부르는 value를 감독하는 함수

const updateNumber = (value) => {
  number.innerText = value;
};

const countStore = createStore(countModifier);
// createStore로 count 값을 저장하는 Store를 생성

countStore.dispatch({ type: "PLUS" });
// countStore의 action.type에 ADD
// dispatch는 Object 타입으로 값을 주어야 함
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });

console.log(countStore.getState());
//countStore의 State 값 가져오기

plus.addEventListener("click", () => {
  countStore.dispatch({ type: "PLUS" });
  console.log(countStore.getState());
  updateNumber(countStore.getState());
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
  console.log(countStore.getState());
  updateNumber(countStore.getState());
});
