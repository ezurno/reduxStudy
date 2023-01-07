import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
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

export default connect(mapStateToProps)(Home);
// store에 Home 연결. currying 해야 함.
