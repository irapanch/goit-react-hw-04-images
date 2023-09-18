import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { StyledApp, StyledFailure } from 'styles/App.Styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';
import { getImages } from 'services/pixabay';
import { Loader } from './Loader/Loader';

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [max, setMax] = useState(0);
  const [altModal, setAltModal] = useState('');

  useEffect(() => {
    fetchData();
  }, [q, page]);

  const fetchData = async () => {
    if (!q) {
      return;
    }
    setIsLoading(true);

    try {
      const res = await getImages({ q, page });
      const max = Math.ceil(res.data.totalHits / 12);
      setGallery(prevGallery => [...prevGallery, ...res.data.hits]);
      setMax(max);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = value => {
    setQ(value.trim());
    setPage(1);
    setGallery([]);
  };

  const handleBtnLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleToggleModal = (image, alt) => {
    setIsOpen(!isOpen);
    setModalImage(image);
    setAltModal(alt);
  };

  return (
    <StyledApp>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <StyledFailure>Ooops... Something went wrong! </StyledFailure>}
      {!gallery.length && q && !isLoading && (
        <StyledFailure>
          Sorry, there are no images matching your search query. Please try
          again!
        </StyledFailure>
      )}
      <ImageGallery handleToggleModal={handleToggleModal} gallery={gallery} />
      {gallery.length > 0 && page !== max && (
        <Button handleBtnLoadMore={handleBtnLoadMore} />
      )}
      {isOpen && (
        <Modal
          modalImage={modalImage}
          altModal={altModal}
          handleToggleModal={handleToggleModal}
        />
      )}
    </StyledApp>
  );
};

export default App;
