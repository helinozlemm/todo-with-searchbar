import { useState } from "react";

const ToDoItem = ({ todo }) => {
  const [color, setColor] = useState("white");

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div
      onClick={changeColor}
      style={{ backgroundColor: color }}
      className="todo"
    >
      {todo.title}
    </div>
  );
};

export default ToDoItem;
