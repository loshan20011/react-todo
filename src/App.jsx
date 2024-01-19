import "./App.css";
import Item from "./Item";
import { useState } from "react";


const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  // handltodo function
  const handleToDO = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, toDo]);
    setToDo("");
  };

  const handleDelete = (index) => {
    const newList = toDoList.filter((_, indexElement) => indexElement !== index);
    setToDoList(newList);
  };

  return (
    <div className="toDo__container">
      <div className="form__container">
        <h1 className="toDo__heading">To Do List</h1>
        <form className="form">
          <input
            className="toDo__input"
            type="text"
            placeholder="Add a to do"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button className="toDo__button" type="submit" onClick={handleToDO}>
            Add
          </button>
        </form>
      </div>

      <div className="toDo__list">
        {toDoList.map((item, index) => (
          <div key={index} className="toDo__item-container">
            <Item item={item} /> 
            <button
              className="toDo__button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
