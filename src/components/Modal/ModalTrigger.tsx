import React, { useState } from 'react';
import {Modal} from './Modal';  // Импортируем компонент модального окна

export const ModalTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  // Управляем состоянием модального окна

  const openModal = () => setIsOpen(true);  // Открываем модалку
  const closeModal = () => setIsOpen(false); // Закрываем модалку

  return (
    <div>
      <button onClick={openModal}>Открыть модалку</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Это модальное окно</h2>
        <p>Контент внутри модального окна.</p>
      </Modal>
    </div>
  );
};
