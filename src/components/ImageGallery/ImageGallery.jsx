import React from 'react';
import { StyledImageGallery } from './ImageGallery.Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, handleToggleModal }) => {
  return (
    <StyledImageGallery>
      {gallery.map(item => (
        <ImageGalleryItem
          key={item.id}
          {...item}
          handleToggleModal={handleToggleModal}
        />
      ))}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  handleToggleModal: PropTypes.func,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};
