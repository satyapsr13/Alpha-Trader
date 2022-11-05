// import logo from "./logo.svg";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions";

import "./todo.css";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div todoapp">
          <figure>
            <figcaption>Add your list here</figcaption>
            <div className="addItems">
              <input
                type="text"
                placeholder="✍ Add Items"
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
              />
              <i
                className="fa fa-plus add-btn"
                onClick={() => dispatch(addTodo(inputData))}
              ></i>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default Todo;
