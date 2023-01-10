import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";
import ToDo from "../components/ToDo";

export default function Detail() {
  const detailId = useParams();
  // 주솟값의 Parameter로 값을 가져옴 오브젝트 형식
  console.log(detailId);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // route를 간단하게 쓰는 useHook

  const onClickBack = () => {
    navigate(-1);
  };
  const onClickHome = () => {
    navigate("/");
  };

  const currentState = useSelector((state) => state);

  const toDo = currentState.find((item) => item.id === parseInt(detailId.id));
  //id와 값이 같은 toDo를 찾음
  const others = currentState.filter(
    (item) => item.id !== parseInt(detailId.id)
  );
  //나머지를 배열로 만듬
  return (
    <div>
      <h1>Details of {toDo.text}</h1>
      <p>word word</p>
      <h2>others</h2>
      <ul>
        {others.map((todo) => (
          <ToDo
            id={todo.id}
            text={todo.text}
            key={todo.id}
            btnOnClick={(event) => {
              console.log("Hello");
              const targetId = parseInt(event.target.parentNode.id);
              dispatch(remove(targetId));
            }}
          />
        ))}
      </ul>

      <button onClick={onClickBack}>Go Back</button>
      <button onClick={onClickHome}>Go Home</button>
    </div>
  );
}
