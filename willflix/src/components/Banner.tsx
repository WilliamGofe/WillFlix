'use client'
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  position: relative;
  height: 60vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
`;

const TitleBanner = styled.p`
  font-size: 80px;
  font-weight: 900;
  font-family: 'Arimo';
  text-transform: uppercase;
`;
export default function Banner({ movie }: { movie: any }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
  return (
    <Container style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center center'
    }}>
      <TitleBanner>{movie?.title || movie?.name}</TitleBanner>
    </Container>
  );
}
