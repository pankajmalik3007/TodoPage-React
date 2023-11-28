
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [taskDetails, setTaskDetails] = useState({
    taskId: '',  // Add taskId field
    day: '',
    date: '',
    time: '',
    // ... other task properties
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskDetails);
    // ... reset form fields or close modal
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task ID:</label>
          <input
            type="text"
            value={taskDetails.taskId}
            onChange={(e) => setTaskDetails({ ...taskDetails, taskId: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Day:</label>
          <input
            type="text"
            value={taskDetails.day}
            onChange={(e) => setTaskDetails({ ...taskDetails, day: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={taskDetails.date}
            onChange={(e) => setTaskDetails({ ...taskDetails, date: e.target.value })}
            required
          />
        </div>
        {/* ... other input fields for time, meeting, subject, venue, isImportant ... */}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
