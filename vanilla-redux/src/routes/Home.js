import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  // actionCreator 와 state를 가져옴
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    addToDo(text);
    setText("");
  };

  return (
    <div>
      <h1>Input value</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Submit</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
} // redux reducer로 부터 현재 state 값을 가져옴

function mapDispatchProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Home);
// store에 Home 연결. currying 해야 함.
// connect 함수의 첫번째 args는 state, 두번째는 dispatch
// dispatch만 할 경우 connect(null, ...)
