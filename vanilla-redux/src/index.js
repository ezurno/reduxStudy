import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const delToDo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};
// reducer에 값을 넘겨주기 위한 함수들.
// (object 변환 함수, action은 object type 이어야 하기 떄문)

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    //redux 에서는 mutation 을 절대 하지 말고 새로운 배열을 만들어야 함 !!!
    //값이 추가 되는걸 순서를 변경하기 위해서는 ...state 순서를 변경하기
    case DEL_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    // JS의 filter 함수는 배열 속에 특정 함수를 만족하는
    // index만 골라서 새로운 배열을 만듬
    default:
      return state;
  }
};

const store = createStore(reducer);

//subScribe 함수는 store 내 value를 화면에 나타내기 위함
store.subscribe(() => {
  console.log(store.getState());
}); // store 에 저장 된 값 가져오기

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
  //addToDo에 add 할 text 값을 args로 넘겨서 dispath
};

const dispatchDelToDo = (text) => {
  const id = parseInt(text.target.parentNode.id);
  //id 값을 parseInt로 int 로 변경하고 id의 부모 노드 속 id <li> 값을 가져옴
  store.dispatch(delToDo(id));
  // 가져온 id 값을 delToDo(), dispatch로 action 기입
};

const paintToDos = () => {
  const toDos = store.getState();
  //store 에 저장된 배열 값 불러오기
  ul.innerHTML = "";
  // update 시 ul 속 html을 지워서 중복 되지 않게 하기 위함

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("Button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", dispatchDelToDo);

    li.id = toDo.id;
    li.innerText = toDo.text;

    li.appendChild(btn);
    ul.appendChild(li);
    //ul속 li 추가, li 속 btn 추가
  });
}; //toDo를 그려주는 함수

store.subscribe(paintToDos);

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}; // 제출 시 input tag 값 지워주고 값 전송

form.addEventListener("submit", onSubmit);
// form 에 eventListener 추가
