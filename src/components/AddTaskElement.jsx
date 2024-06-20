import { useState } from "react";

const AddTaskElement = () => {
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
    console.log(`Task: ${task}, Time: ${time}`);
    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleShowForm}>Add Task</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddTaskElement;
