import React from 'react';
import { StyledItem, StyledImg } from './ImageGalleryItem.Styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  id,
  handleToggleModal,
}) => {
  return (
    <StyledItem>
      <StyledImg
        onClick={() => handleToggleModal(largeImageURL, tags)}
        src={webformatURL}
        alt={tags}
        loading="lazy"
      />
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  handleToggleModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};
