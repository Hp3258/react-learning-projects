import { useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/TodoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
