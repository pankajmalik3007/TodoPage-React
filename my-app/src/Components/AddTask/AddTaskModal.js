import React, { useState } from 'react';

function AddTaskModal({ isOpen, onClose, onAddTask }) {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ day, date });
    setDay('');
    setDate('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Day:</label>
            <input type="text" value={day} onChange={(e) => setDay(e.target.value)} required />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <button type="submit">Add Task</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AddTaskModal;
