import React, { useState } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

function CustomHook1() {
  const [task, setTask] = UseLocalStorage("task", "");
  const [tasks, setTasks] = UseLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj ={
        task,
        completed :false,
        date :new Date().toLocaleString()
    }
    setTasks([...tasks, taskObj])
  };
  return (
      <>
    <form className="w-50" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Task</label>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    <hr />
    {tasks.map((task)=>(
        <h2 key={task.data}>{task.task}</h2>
    ))}
    </>
  );
}
export default CustomHook1;
