import React from 'react';
import UpdateTaskModal from './UpdateTaskModal';

function UpdateTask() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <h2>Update Task</h2>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <UpdateTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default UpdateTask;
