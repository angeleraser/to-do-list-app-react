import React, { useContext } from "react";
import "../../css/AddTaskForm.css";
import { TaskFormContext } from "./AddTaskProvider";
import { getFormatedTime, getIDCount, saveIDCounter } from "../../functions";
import { MainContext } from "../../MainProvider";
const AddTaskForm = () => {
  const {
    isHidden,
    setHiddenClass,
    currentTime,
    setTaskName,
    taskName,
    taskList,
    addTaskToList,
    taskTime,
    setTaskTime,
    setTaskPriority,
    taskPriority,
  } = useContext(TaskFormContext);
  const { taskID, setTaskID } = useContext(MainContext);
  const createTask = () => {
    return {
      name: taskName,
      time: taskTime,
      ID: taskID,
      priority: taskPriority,
    };
  };
  const getTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const getTaskTime = (e) => {
    const defValue = e.target.value || currentTime;
    setTaskTime(getFormatedTime(defValue));
  };
  const handleClick = (con) => {
    if(taskName) {
      setHiddenClass(!isHidden);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("input-task").value = "";
    if (taskName) {
      saveIDCounter(taskID || 0);
      setTaskID(getIDCount() + 1);
      addTaskToList([...taskList, createTask()]);
    }
    setTaskName("");
  };
  const setPriority = (e) => {
    setTaskPriority(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoSave={"off"}
      autoComplete={"off"}
      className={`task-form ${isHidden ? "visible" : ""}`}>
      <input
        id="input-task"
        onChange={getTaskName}
        type="text"
        maxLength="40"
        required
        placeholder="What you need to do?"
      />
      <h2 className="at">At</h2>
      <input
        type="datetime-local"
        onTransitionEnd={getTaskTime}
        onChange={getTaskTime}
        defaultValue={currentTime}
      />
      <h2>Priority</h2>
      <div className="radio-inputs">
        <label htmlFor="high">
          High !!!
          <input
            onClick={setPriority}
            type="radio"
            name="priority"
            id="high"
            value="high"
          />
          <div className="custom-radio"></div>
        </label>
        <label htmlFor="medium">
          Medium !!
          <input
            onClick={setPriority}
            type="radio"
            name="priority"
            id="medium"
            value="medium"
          />
          <div className="custom-radio"></div>
        </label>
        <label htmlFor="low">
          Low !
          <input
            onClick={setPriority}
            type="radio"
            name="priority"
            id="low"
            value="low"
          />
          <div className="custom-radio"></div>
        </label>
        <label htmlFor="none">
          None
          <input
            onClick={setPriority}
            type="radio"
            name="priority"
            id="none"
            value="none"
          />
          <div className="custom-radio"></div>
        </label>
      </div>
      <button className="hidden-form" type="button" onClick={()=> {
        setHiddenClass(!isHidden)
      }}>
      </button>
      <button className="save-task" onClick={handleClick} type="submit">
        Save
      </button>
    </form>
  );
};
export default AddTaskForm;
