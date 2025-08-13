'use client'

import styled from 'styled-components';
import Card from './Card';

const RowWrapper = styled.div`
  margin: 2rem 0;
`;

const RowTitle = styled.h2`
  margin-left: 1rem;
`;

const RowContent = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Row({ title, movies }: { title: string, movies: any[] }) {
  return (
    <RowWrapper>
      <RowTitle>{title}</RowTitle>
      <RowContent>
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </RowContent>
    </RowWrapper>
  );
}
