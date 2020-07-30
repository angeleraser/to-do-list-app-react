import React, { useContext } from "react";
import { TaskListContext } from "./TaskListsProvider";
import { MainContext } from "../../MainProvider";
import TaskCard from "./TaskCard";
import { storageList } from "../../functions";
const CompletedTaskList = () => {
  const { activeList, renderBgText } = useContext(TaskListContext);
  const { completedTaskList } = useContext(MainContext);
  storageList("completedTasksList",[...completedTaskList])
  return (
    <div
      className={`completed-tasks task-list ${
        !activeList ? "displayed" : "hidden"
      }`}>
      {renderBgText(completedTaskList,"Complete your tasks to see the history")}
      {completedTaskList.map((data, i) => (
        <TaskCard data={data} key={i} />
      ))}
    </div>
  );
};

export default CompletedTaskList;
