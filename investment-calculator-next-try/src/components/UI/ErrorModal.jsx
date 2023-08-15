import React from 'react';
import ReactDOM from 'react-dom';
import ButtonReset from './ButtonReset';
import './ErrorModal.css';

function ErrorModal({ title, message, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="overlay" id="overlay" onClick={onClose} />,
        document.getElementById('overlay-root')
      )}

      {ReactDOM.createPortal(
        <div className="modal">
          <header className="header">
            <h2>{title}</h2>
          </header>
          <div className="content">
            <p>{message}</p>
          </div>
          <footer className="actions">
            <ButtonReset type="reset" onClick={onClose}>
              Сбросить
            </ButtonReset>
          </footer>
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default ErrorModal;
