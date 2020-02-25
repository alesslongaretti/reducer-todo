import React, { useState, useReducer } from "react";

import { initialState, listReducer } from "../reducers/App";
import Title from "./Title";

const TodoList = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const [newList, setNewList] = useState("");

  const toggleCompleted = e => {
    dispatch({ type: "TOGGLE", id: e });
  };

  const clearChanges = e => {
    dispatch({ type: "CLEAR", id: e });
    e.preventDefault();
  };

  const handleChanges = e => {
    setNewList(e.target.value);
    e.preventDefault();
  };

  const handleUpdateTitle = e => {
    dispatch({ type: "ADD", payload: newList });
    e.preventDefault();
  };

  return (
    <div>
      <header>
        <h1> To do List</h1>
      </header>
      <div>
        <form onSubmit={handleUpdateTitle}>
          <div className="Add-task">
            <input className="input-task"
              onChange={handleChanges}
              type="text"
              name="item"
              placeholder="New Task"
              value={newList}
            />
            <button className="add-button">ADD</button>
          </div>
          <div className="todo-list">
            <div className="list">
            {state.map(item => (
              <Title
                key={item.id}
                item={item}
                toggleCompleted={toggleCompleted}
              />
            ))}
            </div>

            <button className="clear-button" onClick={clearChanges}> Clear Completed Task </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
