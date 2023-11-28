// src/components/DeleteTask/DeleteTask.js
import React from 'react';
import DeleteTaskModal from './DeleteTaskModal';

function DeleteTask() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <h2>Delete Task</h2>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <DeleteTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default DeleteTask;
