import React, { useCallback, useState } from "react";

function UseCallback() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some other Taskss"]);
  },[setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}
const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");
  return (
    <button className="btn btn-primary" onClick={addTask}>
      Add Button
    </button>
  );
});
export default UseCallback;
