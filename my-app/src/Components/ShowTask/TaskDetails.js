// import React from 'react';

// function TaskDetails({ task }) {
//   return (
//     <div>
//       <p>
//         {task.day} - {task.meeting}
//         {task.isImportant && <span> (Important)</span>}
//       </p>
//       {/* Add your Update and Delete logic here */}
//       <button>Update</button>
//       <button>Delete</button>
//     </div>
//   );
// }

// export default TaskDetails;
// import React, { useState } from 'react';

// function TaskDetails({ task, onUpdate, onDelete }) {
//   const [isEditing, setEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState({ ...task });

//   const handlePropertyChange = (property, value) => {
//     setEditedTask((prevTask) => ({
//       ...prevTask,
//       [property]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(task.id, editedTask);
//     setEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <div>
//             <label>Day:</label>
//             <input
//               type="text"
//               value={editedTask.day}
//               onChange={(e) => handlePropertyChange('day', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Date:</label>
//             <input
//               type="date"
//               value={editedTask.date}
//               onChange={(e) => handlePropertyChange('date', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Time:</label>
//             <input
//               type="time"
//               value={editedTask.time}
//               onChange={(e) => handlePropertyChange('time', e.target.value)}
//             />
//           </div>
//           {/* ... other input fields for meeting, subject, venue, isImportant ... */}
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <>
//           <p>
//             {editedTask.day} - {editedTask.meeting}
//             {editedTask.isImportant && <span> (Important)</span>}
//           </p>
//           <button onClick={() => setEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(task.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default TaskDetails;
// import React, { useState } from 'react';

// function TaskDetails({ task, onUpdate, onDelete }) {
//   const [isEditing, setEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState({ ...task });

//   const handlePropertyChange = (property, value) => {
//     setEditedTask((prevTask) => ({
//       ...prevTask,
//       [property]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(task.id, editedTask);
//     setEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//         <div>
//             <label>taskId:</label>
//             <input
//               type="number"
//               value={editedTask.day}
//               onChange={(e) => handlePropertyChange('taskId', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Day:</label>
//             <input
//               type="text"
//               value={editedTask.day}
//               onChange={(e) => handlePropertyChange('day', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Date:</label>
//             <input
//               type="date"
//               value={editedTask.date}
//               onChange={(e) => handlePropertyChange('date', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Time:</label>
//             <input
//               type="time"
//               value={editedTask.time}
//               onChange={(e) => handlePropertyChange('time', e.target.value)}
//             />
//           </div>
//           {/* ... other input fields for meeting, subject, venue, isImportant ... */}
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <>
//           <p>
//             {editedTask.day} - {editedTask.meeting}
//             {editedTask.isImportant && <span> (Important)</span>}
//           </p>
//           <button onClick={() => setEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(task.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default TaskDetails;
// import React, { useState } from 'react';

// function TaskDetails({ task, onUpdate, onDelete }) {
//   const [isEditing, setEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState({ ...task });

//   const handlePropertyChange = (property, value) => {
//     setEditedTask((prevTask) => ({
//       ...prevTask,
//       [property]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(task.id, editedTask);
//     setEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <div>
//             <label>Task ID:</label>
//             <input
//               type="number"
//               value={editedTask.taskId}
//               onChange={(e) => handlePropertyChange('taskId', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Day:</label>
//             <input
//               type="text"
//               value={editedTask.day}
//               onChange={(e) => handlePropertyChange('day', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Date:</label>
//             <input
//               type="date"
//               value={editedTask.date}
//               onChange={(e) => handlePropertyChange('date', e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Time:</label>
//             <input
//               type="time"
//               value={editedTask.time}
//               onChange={(e) => handlePropertyChange('time', e.target.value)}
//             />
//           </div>
//           {/* ... other input fields for meeting, subject, venue, isImportant ... */}
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <>
//           <p>
//             Task ID: {editedTask.taskId} - {editedTask.day} - {editedTask.meeting}
//             {editedTask.isImportant && <span> (Important)</span>}
//           </p>
//           <button onClick={() => setEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(task.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default TaskDetails;
// import React, { useState } from 'react';

// function TaskDetails({ task, onUpdate, onDelete }) {
//   const [isEditing, setEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState({ ...task });

//   const handlePropertyChange = (property, value) => {
//     setEditedTask((prevTask) => ({
//       ...prevTask,
//       [property]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     onUpdate(task.id, editedTask);
//     setEditing(false);
//   };

//   return (
//     <div>
//       <table style={{ width: '100%' }}>
//         <tbody>
//           <tr>
//             <td>Task ID:</td>
//             <td>{editedTask.taskId}</td>
//           </tr>
//           <tr>
//             <td>Day:</td>
//             <td>{editedTask.day}</td>
//           </tr>
//           <tr>
//             <td>Date:</td>
//             <td>{editedTask.date}</td>
//           </tr>
//           <tr>
//             <td>Time:</td>
//             <td>{editedTask.time}</td>
//           </tr>
//           {/* ... other rows for meeting, subject, venue, isImportant ... */}
//         </tbody>
//       </table>
//       {isEditing ? (
//         <>
//           {/* ... input fields for editing task properties ... */}
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => setEditing(true)}>Edit</button>
//           <button onClick={() => onDelete(task.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default TaskDetails;
import React, { useState } from 'react';

function TaskDetails({ task, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handlePropertyChange = (property, value) => {
    setEditedTask((prevTask) => ({
      ...prevTask,
      [property]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(task.id, editedTask);
    setEditing(false);
  };

  return (
    <div>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>Task ID:</td>
            <td>{editedTask.taskId}</td>
          </tr>
          <tr>
            <td>Day:</td>
            <td>{editedTask.day}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{editedTask.date}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{editedTask.time}</td>
          </tr>
          {/* ... other rows for meeting, subject, venue, isImportant ... */}
        </tbody>
      </table>
      {isEditing ? (
        <>
          <div>
            <label>Task ID:</label>
            <input
              type="number"
              value={editedTask.taskId}
              onChange={(e) => handlePropertyChange('taskId', e.target.value)}
            />
          </div>
          {/* ... input fields for editing other task properties ... */}
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskDetails;
