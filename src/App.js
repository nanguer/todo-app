import { TodoContainer } from "./components/TodoContainer";

function App() {
  return (
    <div className="app_container">
      <header>
        <h1>Todo App</h1>
        <h2>Manage your todos!</h2>
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
