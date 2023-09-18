import React from 'react';
import { StyledloadBtn } from './Button.Styled';
import PropTypes from 'prop-types';

export const Button = ({ handleBtnLoadMore }) => {
  return (
    <StyledloadBtn type="button" onClick={handleBtnLoadMore}>
      Load more
    </StyledloadBtn>
  );
};

Button.propTypes = {
  handleBtnLoadMore: PropTypes.func,
};
