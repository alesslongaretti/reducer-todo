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
      <form onSubmit={handleUpdateTitle}>
        <input
          onChange={handleChanges}
          type="text"
          name="item"
          value={newList}
        />
        <button>add</button>

        {state.map(item => (
          <Title key={item.id} item={item} toggleCompleted={toggleCompleted} />
        ))}

        <button onClick={clearChanges}> Clear </button>
      </form>
    </div>
  );
};

export default TodoList;
