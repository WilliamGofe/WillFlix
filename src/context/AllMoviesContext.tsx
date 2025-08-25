'use client';
import { createContext, useContext, ReactNode } from 'react';
import { MediaItem } from '../utils/types';

interface AllMoviesContextProps {
  allMovies: MediaItem[];
}

const AllMoviesContext = createContext<AllMoviesContextProps | undefined>(undefined);

export function AllMoviesProvider({ allMovies, children }: { allMovies: MediaItem[]; children: ReactNode }) {
  return (
    <AllMoviesContext.Provider value={{ allMovies }}>
      {children}
    </AllMoviesContext.Provider>
  );
}

export function useAllMovies() {
  const context = useContext(AllMoviesContext);
  if (!context) {
    throw new Error('useAllMovies deve ser usado dentro de AllMoviesProvider');
  }
  return context;
}
