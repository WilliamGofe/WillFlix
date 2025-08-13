'use client'
import styled from 'styled-components';
import Image from 'next/image';

const CardWrapper = styled.div`
  width: 200px;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Card({ movie }: { movie: any }) {
  return (
    <CardWrapper>
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title || movie.name}
        width={200}
        height={300}
      />
    </CardWrapper>
  );
}
