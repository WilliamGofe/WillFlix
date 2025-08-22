'use client'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { useState } from 'react';
import { useAllMovies } from '../context/AllMoviesContext';
import Movie from './Movie';
import Image from 'next/image';
import { MediaItem } from '../utils/types';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
  position: fixed;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.h1`
  color: #e50914;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  background: rgba(0,0,0,0.6);
  border: 1px solid #555;
  color: white;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 999px;
  width: 0;
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &.open {
    width: 250px;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;

  &:hover {
    color:#f3b500;
  }
`;

const NotificationIcon = styled(MdNotifications)`
  cursor: pointer;
  &:hover {
    color:#f3b500;
  }
`;
const ResultsDropdown = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 280px;
  background: rgba(0,0,0,0.9);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.7);
  max-height: 400px;
  overflow-y: auto;
  z-index: 20;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
  }

  img {
    border-radius: 6px;
  }

  span {
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export default function Header() {
  const { allMovies } = useAllMovies();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);

  const filtered = query.length > 0
    ? allMovies.filter((m) =>
        (m.title || m.name || '').toLowerCase().includes(query.toLowerCase())
      )
    : [];

    console.log(searchOpen)
  return (
    <Container>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>WillFlix</Logo>
      <Actions>
        <SearchContainer>
          <SearchInput
            onBlur={() => setSearchOpen(false)}
            className={searchOpen ? 'open' : ''}
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchIcon size={20} onClick={() => setSearchOpen(!searchOpen)} />
          {(filtered.length > 0 && searchOpen) && (
            <ResultsDropdown>
              {filtered.map((movie) => (
                <ResultItem key={movie.id} onClick={() => setSelectedMovie(movie)}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title || movie.name || ''}
                    width={40}
                    height={60}
                  />
                  <span>{movie.title || movie.name}</span>
                </ResultItem>
              ))}
            </ResultsDropdown>
          )}
        </SearchContainer>
        <NotificationIcon size={24} />
      </Actions>

      {selectedMovie && (
        <Movie movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </Container>
  );
}
