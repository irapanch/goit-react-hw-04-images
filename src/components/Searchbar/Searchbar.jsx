import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  StyledBtn,
  StyledContainer,
  StyledInput,
  StyledSearchbar,
} from './Searchbar.Styled';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error('Search field is empty');
    }
    onSubmit(value);
  };

  const handleChangeInput = ({ target }) => {
    setValue(target.value);
  };

  return (
    <StyledSearchbar>
      <StyledContainer onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChangeInput}
          value={value}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
        <StyledBtn type="submit" onClick={handleSubmit}>
          <i className="fa fa-search"></i>
        </StyledBtn>
      </StyledContainer>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
