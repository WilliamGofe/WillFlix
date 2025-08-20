'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { useMyList } from '@/context/MyListContext';
import { useState } from 'react';
import Movie from './Movie';

const CardWrapper = styled.div`
  width: 200px;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 2;
`;

const PosterContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }
`;

const PosterImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PosterContainer}:hover & {
    opacity: 1;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${PosterContainer}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export default function Card({ movie }: { movie: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardWrapper>
        <PosterContainer onClick={handleOpenModal}>
          <PosterImage
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name || ''}
            width={200}
            height={300}
          />
          <Overlay />
          <PlayButton>▶</PlayButton>
        </PosterContainer>
      </CardWrapper>
      {isModalOpen && <Movie movie={movie} onClose={handleCloseModal} />}
    </>
  );
}
