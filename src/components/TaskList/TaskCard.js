import React, { useContext } from "react";
import "../../css/TaskCard.css";
import { MainContext } from "../../MainProvider";
const TaskCard = ({ data: { name, time, ID, priority } }) => {
  const [date, hour] = time.split("/");
  const {
    taskList,
    addTaskToList,
    completedTaskList,
    addCompletedTask,
  } = useContext(MainContext);
  const removeTaskFromList = (list, taskID, callback) => {
    const newList = list.filter((task) => task.ID !== taskID);
    callback([...newList]);
  };
  return (
    <div className={`task-card ${priority}`}>
      <div className="task-data">
        <h2>{name}</h2>
        <p className="date">{date}</p>
        <p className="hour">
          {hour} <span className=" priority">{priority}</span>
        </p>
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={() => {
            removeTaskFromList(taskList, ID, addTaskToList);
            removeTaskFromList(completedTaskList, ID, addCompletedTask);
          }}
          className="delete-task"></button>
        <button
          onClick={() => {
            const getTask = taskList.find((task) => task.ID === ID);
            removeTaskFromList(taskList, ID, addTaskToList);
            addCompletedTask([...completedTaskList, getTask]);
            // doneTask(!isCompleted);
          }}
          className="complete-task">
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
