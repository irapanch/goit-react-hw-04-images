import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledModalImg, StyledOverlay } from './Modal.Styled';

const Modal = ({ handleToggleModal, modalImage, altModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleToggleModal();
    }
  };

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  return (
    <StyledOverlay onClick={onBackDropClick}>
      <StyledModal>
        <StyledModalImg src={modalImage} alt={altModal} />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  handleToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
  altModal: PropTypes.string,
};

export default Modal;
