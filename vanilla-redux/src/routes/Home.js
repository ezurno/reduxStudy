import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";

function Home() {
  // actionCreator 와 state를 가져옴
  const [text, setText] = useState("");

  const toDo = useSelector((state) => state);
  // store에서 현재 state 값 가져오는 방법
  const dispatch = useDispatch();
  // dispatch 사용

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCreators.addToDo(text));
    setText("");
  };

  const btnOnClick = (event) => {
    const targetId = parseInt(event.target.parentNode.id);
    dispatch({ type: "DEL", id: targetId });
  };

  return (
    <div>
      <h1>Input value</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Submit</button>
      </form>
      <ul>
        {toDo.map((state) => (
          <li key={state.id} id={state.id}>
            {state.text}
            <button onClick={btnOnClick}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
