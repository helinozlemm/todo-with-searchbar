import { useState, useMemo } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoItem from "./components/ToDoItem";
import { ToDoItems } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredToDoItems = useMemo(
    () =>
      ToDoItems.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form setSearchTerm={setSearchTerm} />
      <div>
        {filteredToDoItems.map((todo) => {
          return <ToDoItem key={todo.title} todo={todo}></ToDoItem>;
        })}
      </div>
    </div>
  );
}

export default App;
