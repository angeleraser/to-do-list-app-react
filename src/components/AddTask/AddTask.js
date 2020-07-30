import React from "react";
import "../../css/AddTask.css";
import AddTaskForm from "./AddTaskForm";
import AddTaskButton from "./AddTaskButton";
import AddTaskProvider from "./AddTaskProvider";
const AddTask = () => {
  
  return (
    <div className="add-task-wrapper">
      <AddTaskProvider>
        <AddTaskForm />
        <AddTaskButton />
      </AddTaskProvider>
    </div>
  );
};

export default AddTask;
