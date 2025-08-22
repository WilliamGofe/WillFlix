'use client'
import styled from 'styled-components';
import Image from 'next/image';
import Row from './Row';
import { UseMyList } from '../context/MyListContext';
import { useState } from 'react';
import Movie from './Movie';
import { Skeleton } from './Skeleton';

import type { CSSProperties } from 'react';
import { InitialList } from '../utils/MockMyList';

const Container = styled.section<{ $height?: CSSProperties['height'], $alignItems?: string }>`
  position: relative;
  height: ${({ $height }) => $height || '125vh'};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${({ $alignItems }) => $alignItems || 'baseline'};
  padding: 2rem;
  overflow: hidden;
`;

const Background = styled.div<{ $imageUrl: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $imageUrl }) => ($imageUrl ? `url(${$imageUrl})` : 'none')};
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
  transform: translate(-50%, -50%);
  background: #e50914;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: 40px;
  padding: 12px 21px;
  color: white;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: background 0.4s ease, opacity 0.4s ease;

  ${Container}:hover & {
    opacity: 1;
  }

  &:hover {
    background: #f40612;
  }
`;


export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { myList } = UseMyList();
  const myListExist = myList && myList.length > 0;
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const defaultImageUrl = 'https://image.tmdb.org/t/p/original/qg8Gv2w0dDL8cMsG2QO2hWp58wy.jpg';

  const imageUrl =
    myListExist && myList[0]?.backdrop_path
      ? `https://image.tmdb.org/t/p/original${myList[0].backdrop_path}`
      : defaultImageUrl;

  return (
    <Container $height={!myListExist ? '85vh' : '125vh'} $alignItems={!myListExist ? 'center' : 'baseline'}>
      {isLoading && <Skeleton />}
      <Background $imageUrl={imageUrl} onClick={handleOpenModal} onLoad={() => setIsLoading(false)} />
      <Overlay />
      <PlayButton onClick={handleOpenModal}>▶</PlayButton>
      {!myListExist &&
        <Image style={{ zIndex: '4' }} width='700' height='210' src='https://static.wikia.nocookie.net/international-entertainment-project/images/1/18/Wednesday_-_logo_%28English%29.png/revision/latest?cb=20230109170953' alt='Logo'></Image>
      }
      {myListExist &&
        <Row title="Minha Lista" movies={myList} margin="3em 0 0 0" />
      }
      {isModalOpen && <Movie movie={myListExist ? myList[0] : InitialList[0]} onClose={handleCloseModal} bannerComponent={true} />}
    </Container>
  );
}
