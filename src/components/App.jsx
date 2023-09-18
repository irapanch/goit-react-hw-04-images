import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { StyledApp, StyledFailure } from 'styles/App.Styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getImages } from 'services/pixabay';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    q: null,
    isLoading: false,
    error: null,
    isOpen: false,
    modalImage: '',
    max: 0,
    altModal: '',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.q !== this.state.q || prevState.page !== this.state.page) {
      this.setState({ isLoading: true });

      try {
        const res = await getImages({
          q: this.state.q,
          page: this.state.page,
        });
        const max = Math.ceil(res.data.totalHits / 12);

        this.setState(prev => ({
          gallery: [...prev.gallery, ...res.data.hits],
          max,
        }));
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleSubmit = value => {
    this.setState({ q: value.trim(), page: 1, gallery: [] });
  };

  handleBtnLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  handleToggleModal = (image, alt) => {
    this.setState({
      isOpen: !this.state.isOpen,
      modalImage: image,
      altModal: alt,
    });
  };

  render() {
    const {
      gallery,
      isLoading,
      isOpen,
      modalImage,
      error,
      max,
      page,
      q,
      altModal,
    } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSubmit} />

        {isLoading && <Loader />}
        {error && (
          <StyledFailure>Ooops... Something went wrong! </StyledFailure>
        )}
        {!gallery.length && q && !isLoading && (
          <StyledFailure>
            Sorry, there are no images matching your search query. Please try
            again!
          </StyledFailure>
        )}
        <ImageGallery
          handleToggleModal={this.handleToggleModal}
          gallery={gallery}
        />

        {isOpen && (
          <Modal
            modalImage={modalImage}
            altModal={altModal}
            handleToggleModal={this.handleToggleModal}
          />
        )}
        {gallery.length > 0 && page !== max && (
          <Button handleBtnLoadMore={this.handleBtnLoadMore} />
        )}
      </StyledApp>
    );
  }
}

export default App;
