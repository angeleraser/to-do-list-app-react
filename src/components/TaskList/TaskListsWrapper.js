import React from "react";
import { TaskListProvider } from "./TaskListsProvider";
import UndoneTaskList from "./UndoneTaskList";
import "../../css/TaskListWrapper.css";
import TaskListsToggle from "./TaskListsToggle";
import CompletedTaskList from "./CompletedTaskList";
const TaskListsWrapper = () => {
  return (
    <div className=" tasks-wrapper"> 
      <TaskListProvider>
        <TaskListsToggle />
        <CompletedTaskList />
        <UndoneTaskList />
      </TaskListProvider>
    </div>
  );
};

export default TaskListsWrapper;
