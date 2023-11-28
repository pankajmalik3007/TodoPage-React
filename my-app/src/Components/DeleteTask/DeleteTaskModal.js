// src/components/DeleteTask/DeleteTaskModal.js
import React from 'react';

function DeleteTaskModal({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        {/* Delete Task Form */}
        {/* Include task selection and confirmation button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DeleteTaskModal;
