import React, { useState, useContext } from "react";
import "../../css/TaskListToggle.css";
import { TaskListContext } from "./TaskListsProvider";
import { MainContext } from "../../MainProvider";
const TaskListsToggle = () => {
  const [isActive, setClassName] = useState(true);
  const { toggleList } = useContext(TaskListContext);
  const { taskList, completedTaskList } = useContext(MainContext);
  const toggleUndoneTaskList = () => {
    setClassName(true);
    toggleList(true);
  };
  const toggleCompletedTaskList = () => {
    setClassName(false);
    toggleList(false);
  };
  const renderTaskCount = (list, con) => {
    let count = list.length;
    if (count && !con) {
      if (count > 10) count = `+10`;
      return <div className="task-count">{count}</div>;
    }
  };
  return (
    <div className="list-toggle">
      <div
        className={`button-bg ${
          isActive ? "undone-btn" : "completed-btn"
        }`}></div>
      <button
        onClick={toggleUndoneTaskList}
        className={`undone ${isActive ? "active" : ""}`}>
        {renderTaskCount(taskList, isActive)}
        Undone
      </button>
      <button
        onClick={toggleCompletedTaskList}
        className={`completed ${!isActive ? "active" : ""}`}>
        Completed
        {renderTaskCount(completedTaskList, !isActive)}
      </button>
    </div>
  );
};

export default TaskListsToggle;
