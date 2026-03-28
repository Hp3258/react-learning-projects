import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form onSubmit={submit}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
