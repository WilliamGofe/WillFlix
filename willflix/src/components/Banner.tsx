'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Row from './Row';
import { useMyList } from '../context/MyListContext';
import { useState } from 'react';
import Movie from './Movie';
import { Skeleton } from './Skeleton';

const Container = styled.section`
  position: relative;
  height: 145vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  overflow: hidden;
`;

const Background = styled.div<{ imageUrl: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'none')};
  background-size: cover;
  background-position: center center;
  transition: transform 0.8s ease-in-out;
  z-index: 2;
  cursor: pointer;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: #e50914;
  border: none;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: all 0.4s ease;

  ${Container}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    background: #f40612;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export default function Banner() {
  const { myList }: any = useMyList();

  const imageUrl = myList[2]?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${myList[2].backdrop_path}`
    : '';

const [isModalOpen, setIsModalOpen] = useState(false);
const [isLoading, setIsLoading] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Container >
      {isLoading && <Skeleton/>}
      <Background imageUrl={imageUrl} onClick={handleOpenModal} onLoad={() => setIsLoading(false)}/>
      <Overlay />
      <PlayButton onClick={handleOpenModal}>▶</PlayButton>

      <Row title="Minha Lista" movies={myList} margin="3em 0 0 0" />
      {isModalOpen && <Movie movie={myList[2]} onClose={handleCloseModal} />}
    </Container>
  );
}
