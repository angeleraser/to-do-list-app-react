import React, { createContext, useState, useContext } from "react";
import { MainContext } from "../../MainProvider";
import { getDateNow } from "../../functions";
export const TaskFormContext = createContext();
const AddTaskProvider = ({ children }) => {
  const [isHidden, setHiddenClass] = useState(false);
  const [currentTime, setCurrentTime] = useState(getDateNow());
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("none");
  const { taskList, addTaskToList,} = useContext(MainContext);
  // Task Time
  const [taskTime, setTaskTime] = useState();
  const providerInfo = {
    isHidden,
    setHiddenClass,
    currentTime,
    setCurrentTime,
    taskName,
    taskList,
    addTaskToList,
    setTaskName,
    taskTime,
    setTaskTime,
    taskPriority,
    setTaskPriority
  };
  return (
    <TaskFormContext.Provider value={providerInfo}>
      {children}
    </TaskFormContext.Provider>
  );
};

export default AddTaskProvider;
