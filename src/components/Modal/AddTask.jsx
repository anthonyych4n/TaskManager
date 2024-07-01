import { useState } from "react";
import { PropTypes } from "prop-types";
import Add from "/add.png";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex flex-row items-center justify-between gap-2"
        >
          <img src={Add} alt="" className="h-10 w-10" />
          Add Task form
        </button>
      </div>
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
