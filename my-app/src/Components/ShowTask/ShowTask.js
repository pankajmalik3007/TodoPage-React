// import React from 'react';

// function ShowTask({ tasks }) {
//   return (
//     <div>
//       <h2>Show Tasks</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Task ID</th>
//             <th>Day</th>
//             <th>Date</th>
//             {/* Add more table headers for additional task properties if needed */}
//           </tr>
//         </thead>
//         <tbody>
//           {tasks?.map((task, index) => (
//             <tr key={index}>
//               <td>{task.taskId}</td>
//               <td>{task.day}</td>
//               <td>{task.date}</td>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ShowTask;
import React from 'react';

function ShowTask({ tasks, onUpdate, onDelete }) {
  const handleUpdate = (taskId) => {
    // Implement your update logic here, if needed
    console.log(`Update task with ID: ${taskId}`);
    // Example: onUpdate(taskId, updatedTaskDetails);
  };

  const handleDelete = (taskId) => {
    // Implement your delete logic here, if needed
    console.log(`Delete task with ID: ${taskId}`);
    // Example: onDelete(taskId);
  };

  return (
    <div>
      <h2>Show Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Day</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr key={index}>
              <td>{task.taskId}</td>
              <td>{task.day}</td>
              <td>{task.date}</td>
              <td>
                <button onClick={() => handleUpdate(task.taskId)}>Update</button>
                <button onClick={() => handleDelete(task.taskId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTask;
