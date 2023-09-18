import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
  StyledBtn,
  StyledContainer,
  StyledInput,
  StyledSearchbar,
} from './Searchbar.Styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Search field is empty');
    }
    this.props.onSubmit(this.state.value);
  };
  handleChangeInput = ({ target }) => {
    this.setState({ value: target.value });
  };
  render() {
    return (
      <StyledSearchbar>
        <StyledContainer onSubmit={this.handleSubmit}>
          <StyledInput
            onChange={this.handleChangeInput}
            value={this.state.value}
            type="text"
            autoComplete="off"
            placeholder="Search images..."
          />
          <StyledBtn type="submit" onClick={this.handleSubmit}>
            <i className="fa fa-search"></i>
          </StyledBtn>
        </StyledContainer>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
