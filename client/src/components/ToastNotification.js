import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ToastNotification = ({ message, isError, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    const handleClose = () => {
      setIsVisible(false);
      onClose();
    };
  
    return (
      <div className={`toast-notification ${isError ? 'error' : 'success'} ${isVisible ? 'visible' : ''}`}>
        <div className='toast-content'>
          <p className='mb-0 pb-0'>{message}</p>
          <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={handleClose} />
        </div>
      </div>
    );
};

export default ToastNotification;