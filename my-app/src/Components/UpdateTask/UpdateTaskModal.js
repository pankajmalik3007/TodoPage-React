import React, { useState } from 'react';

function AddTaskModal({ isOpen, onClose, tasks, setTasks }) {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [meeting, setMeeting] = useState('');
  const [subject, setSubject] = useState('');
  const [venue, setVenue] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      day,
      date,
      time,
      meeting,
      subject,
      venue,
      isImportant,
    };
    setTasks([...tasks, task]);
    setDay('');
    setDate('');
    setTime('');
    setMeeting('');
    setSubject('');
    setVenue('');
    setIsImportant(false);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Day */}
          <div>
            <label>Day:</label>
            <input type="text" value={day} onChange={(e) => setDay(e.target.value)} required />
          </div>
          {/* Date */}
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          {/* Time */}
          <div>
            <label>Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
          {/* Meeting */}
          <div>
            <label>Meeting:</label>
            <input type="text" value={meeting} onChange={(e) => setMeeting(e.target.value)} required />
          </div>
          {/* Subject */}
          <div>
            <label>Subject:</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          {/* Venue */}
          <div>
            <label>Venue:</label>
            <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required />

          </div>
          {/* Important Task */}
          <div>
            <label>Is Important?</label>
            <input type="checkbox" checked={isImportant} onChange={() => setIsImportant(!isImportant)} />
          </div>
          <button type="submit">Add Task</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddTaskModal;
