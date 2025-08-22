import { fetchFromTMDB, requests } from '../lib/tmdb';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Header from '../components/Header';
import { AllMoviesProvider } from '../context/AllMoviesContext';
import { MediaItem } from '../utils/types';

export default async function Page() {
  const [trending, topRated, actionMovies] = await Promise.all([
    fetchFromTMDB(requests.trending),
    fetchFromTMDB(requests.topRated),
    fetchFromTMDB(requests.actionMovies),
  ]);

  const merged = [
    ...trending.results,
    ...topRated.results,
    ...actionMovies.results,
  ] as MediaItem[];

  const allMovies = Array.from(
    new Map(merged.map((movie) => [movie.id, movie])).values()
  );

  return (
    <AllMoviesProvider allMovies={allMovies}>
      <Header />
      <Banner />
      <Row title="Em Alta" movies={trending.results} />
      <Row title="Mais Bem Avaliados" movies={topRated.results} />
      <Row title="Ação" movies={actionMovies.results} />
    </AllMoviesProvider>
  );
}
