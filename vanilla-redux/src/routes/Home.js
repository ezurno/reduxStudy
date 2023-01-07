import React, { useState } from "react";

export default function Home() {
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
    </div>
  );
}
