import React, { useState } from 'react';
import ImportantTaskModal from './ImportantTaskModal';

function ImportantTask() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h2>Important Tasks</h2>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <ImportantTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default ImportantTask;
