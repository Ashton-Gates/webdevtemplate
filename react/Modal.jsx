function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
</Modal>
