import React, { useContext } from "react";
import "../../css/AddTaskButton.css";
import { TaskFormContext } from "./AddTaskProvider";
import { getDateNow } from "../../functions";
const AddTaskButton = () => {
  const { isHidden, setHiddenClass, setCurrentTime } = useContext(
    TaskFormContext
  );
  const handleClick = () => {
    setHiddenClass(!isHidden);
    setCurrentTime(getDateNow());
  };

  return (
    <button
      onClick={handleClick}
      className={`add-task-button ${isHidden ? "hidden" : ""}`}>
      Add new task
    </button>
  );
};

export default AddTaskButton;
