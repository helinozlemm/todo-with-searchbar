import { useState, useMemo, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoItem from "./components/ToDoItem";
import { API_TODO } from "./utils/constans";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch(API_TODO)
      .then((response) => response.json())
      .then((data) => setToDoList(data));
  }, []);

  const filteredToDoItems = useMemo(
    () =>
      toDoList.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, toDoList]
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
