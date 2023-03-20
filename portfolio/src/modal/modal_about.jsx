import React from 'react';

const Modal = ({ modalCloseButton, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className='modal-close-button' onClick={modalCloseButton}>Close</button>
      </section>
    </div>
  );
};

export default Modal;