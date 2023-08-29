import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import ButtonReset from '../Button/ButtonReset';
import './ModalError.css';

function ModalError({ title, massage, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="overlay" onClick={onClose} />,
        document.getElementById('overlay-root')
      )}
      ;
      {ReactDOM.createPortal(
        <Card className="modal">
          <header className="header">
            <h2>{title}</h2>
          </header>
          <div className="content">
            <p>{massage}</p>
          </div>
          <footer className="footer">
            <ButtonReset onClick={onClose}>Закрыть</ButtonReset>
          </footer>
        </Card>,
        document.getElementById('modal-root')
      )}
    </>
  );
}

export default ModalError;
