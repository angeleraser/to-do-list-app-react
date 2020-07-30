import React, { createContext, useState } from "react";

export const TaskListContext = createContext();
export const TaskListProvider = ({ children }) => {
  const [activeList, toggleList] = useState(true);
  const renderBgText = (list, text) => {
    if (list.length === 0) {
      return <div className="bg-text">{text} </div>;
    }
  };
  const providerValue = {
    activeList,
    toggleList,
    renderBgText
  };
  return (
    <TaskListContext.Provider value={providerValue}>
      {children}
    </TaskListContext.Provider>
  );
};
