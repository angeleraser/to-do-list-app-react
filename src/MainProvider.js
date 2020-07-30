import React, { createContext, useState } from "react";
import { getList, getIDCount } from "./functions";
export const MainContext = createContext();
export const MainContentProvider = ({ children }) => {
  const [taskList, addTaskToList] = useState(getList("taskList") || []);
  const [completedTaskList, addCompletedTask] = useState(
    getList("completedTasksList") || []
  );
  const [taskID, setTaskID] = useState(getIDCount() + 1);
  const providerValue = {
    taskList,
    addTaskToList,
    completedTaskList,
    addCompletedTask,
    taskID,
    setTaskID,
  };
  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
};
