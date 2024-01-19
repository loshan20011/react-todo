import React from "react";
import "./App.css";


const Item = ({item}) => {

  return (
    <div className="toDo__element">
      <h3 className="toDO__item"> {item} </h3>
    </div>
  );
};

export default Item;
