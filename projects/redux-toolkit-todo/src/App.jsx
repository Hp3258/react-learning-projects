import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Redux Toolkit Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
