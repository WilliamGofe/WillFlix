'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { MediaItem } from '@/utils/types';
import { UseMyList } from '@/context/MyListContext';
import { useEffect, useState } from 'react';
import { Skeleton } from './Skeleton';

interface ModalProps {
  movie: MediaItem | null;
  onClose: () => void;
  bannerComponent?: boolean;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 80%;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 0 30px rgba(0,0,0,0.8);
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 60%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0,0,0,0.6);
  border: none;
  color: white;
  font-size: 28px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 4;

  &:hover {
    background: rgba(0,0,0,0.8);
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
`;

const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReleaseDate = styled.span`
  font-size: 0.9rem;
  color: #ccc;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${(props) => (props.filled ? '#f5c518' : '#555')};
  font-size: 1rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  background: ${(props) => (props.primary ? '#e50914' : 'rgba(255,255,255,0.2)')};
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? '#f6121d' : 'rgba(255,255,255,0.3)')};
  }
`;

function renderStars(vote_average: number) {
  const stars = Math.round(vote_average / 2);
  return Array.from({ length: 5 }, (_, i) => (
    <Star key={i} filled={i < stars}>★</Star>
  ));
}

export default function Movie({ movie, onClose, bannerComponent }: ModalProps) {
  const { addToMyList, myList, removeFromMyList } = UseMyList(); // <-- Mova para o topo!
  const [onList, setOnList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movie) {
      setOnList(myList.some((m: MediaItem) => m.id === movie.id));
    }
  }, [myList, movie]);

  if (!movie) return null;

  const handleListClick = () => {
    if (onList) {
      removeFromMyList(movie.id);
      if (bannerComponent) {
        onClose();
      }
    } else {
      addToMyList(movie);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
      {isLoading && <Skeleton  />}
        <BackgroundImage
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name || ''}
          fill
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="/placeholder.png"
          priority
          onLoad={() => setIsLoading(false)}
        />
        <GradientOverlay />
        <CloseButton onClick={onClose}>×</CloseButton>
        <Content>
          <Title>{movie.title || movie.name}</Title>
          <InfoRow>
            <ReleaseDate>{movie.release_date || movie.first_air_date}</ReleaseDate>
            <Rating>{renderStars(movie.vote_average)}</Rating>
          </InfoRow>
          <Overview>{movie.overview}</Overview>
          <Actions>
            <Button primary>▶ Assistir</Button>
            <Button onClick={handleListClick}>
              {onList ? '- Minha lista' : '+ Minha lista'}
            </Button>
          </Actions>
        </Content>
      </ModalContainer>
    </Overlay>
  );
}
