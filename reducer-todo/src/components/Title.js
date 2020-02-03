import React from "react";

const Title = props => {
  return (
    <div
    onClick= {event => props.toggleCompleted(props.item.id)}
    className={`item${props.item.completed ? " completed " : ""}`}
    >
      <p>{props.item.title}</p>
    </div>
  );
};

export default Title;
