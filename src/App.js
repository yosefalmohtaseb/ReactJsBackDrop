import "./index.css";
import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo titel="Learn React" />
      <Todo titel='Play Football'/>
      <Todo titel='Go to Gym'/>
    </div>
  );
}

export default App;
