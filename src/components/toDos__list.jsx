import React from 'react';

const ToDosList = ({ data, toggleIsCompleted, removeTask }) => {
  return data.map(task => {
    return (
      <div className="toDos__dropDownTask" key={task.id}>
        <div className="toDos__task-wrapper">
          <input
            onClick={() => toggleIsCompleted(task.id)}
            type="checkbox"
            className="toDos__toggle"
            defaultChecked={task.isCompleted}
          />
          <span className="toDos__toggle--helper" />
          <span className="toDos__task">{task.task}</span>
        </div>
        <button
          type="button"
          className="toDos__button-delete"
          onClick={() => removeTask(task.id)}
        >
          x
        </button>
      </div>
    );
  });
};

export default ToDosList;