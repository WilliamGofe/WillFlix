'use client'

import styled from 'styled-components';
import Card from './Card';
import { useRef, useState } from 'react';
import { MediaItem } from '@/utils/types';

interface IRowWrapper {
  margin?: string;
}
const RowWrapper = styled.div<IRowWrapper>`
  margin: ${(props) => props.margin || '2rem 0'};
  z-index: 3;
`;

const RowTitle = styled.h2`
  margin-left: 1rem;
`;

const RowContent = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 1rem 1rem 0 1rem;
  scroll-behavior: smooth;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Row({ title, movies, margin }: { title: string, movies: MediaItem[], margin?: string }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (rowRef.current?.offsetLeft || 0));
    setScrollLeft(rowRef.current?.scrollLeft || 0);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !rowRef.current) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 2; // velocidade do arraste
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  const bannerComponent = title === 'Minha Lista';

  return (
    <RowWrapper margin={bannerComponent ? margin : ''}>
      <RowTitle>{title}</RowTitle>
      <RowContent
        ref={rowRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {movies?.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </RowContent>
    </RowWrapper>
  );
}
