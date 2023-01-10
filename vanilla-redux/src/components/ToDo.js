import { Link } from "react-router-dom";

export default function ToDo({ id, text, btnOnClick }) {
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={btnOnClick}>X</button>
    </li>
  );
}
