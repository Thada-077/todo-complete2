import "primeflex/primeflex.css";
import "./App.css";
import CardTodo from "./components/CardTodo";

function App() {
  return (
    <div className="App p-grid p-align-start vertical-container">
      <div className="p-col">
        <div>
          <CardTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
