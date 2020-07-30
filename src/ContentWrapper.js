import React from "react";
import "../src/css/ContentWrapper.css";
import AddTask from "./components/AddTask/AddTask";
import TaskListsWrapper from "./components/TaskList/TaskListsWrapper";
import { MainContentProvider } from "./MainProvider";
const ContentWrapper = () => {
  return (
    <MainContentProvider>
      <div className="content-wrapper">
        <h1>
          My <span className="blue">To Do </span> List{" "}
          <div className="box"></div>
        </h1>
        <TaskListsWrapper />
        <AddTask />
      </div>
      <h2>
        By{" "}
        <a
          href="https://github.com/angeleraser/"
          rel="noopener noreferrer"
          target="_blank">
          @angeleraser
        </a>
      </h2>
    </MainContentProvider>
  );
};

export default ContentWrapper;
