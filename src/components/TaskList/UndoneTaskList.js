import React, { useContext } from "react";
import "../../css/TaskList.css";
import TaskCard from "./TaskCard";
import { MainContext } from "../../MainProvider";
import { TaskListContext } from "./TaskListsProvider";
import { storageList } from "../../functions";
const UndoneTaskList = () => {
  const { activeList, renderBgText } = useContext(TaskListContext);
  const { taskList } = useContext(MainContext);
  storageList("taskList", [...taskList]);
  return (
    <div
      className={`undone-tasks task-list ${
        activeList ? "displayed" : "hidden"
      }`}>
      {renderBgText(taskList,"You don't have any tasks yet :(")}
      {taskList.map((data, i) => (
        <TaskCard data={data} key={i} />
      ))}
    </div>
  );
};

export default UndoneTaskList;
