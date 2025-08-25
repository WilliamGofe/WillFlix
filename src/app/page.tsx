import { fetchFromTMDB, requests } from '../lib/tmdb';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Header from '../components/Header';
import { AllMoviesProvider } from '../context/AllMoviesContext';
import { MediaItem } from '../utils/types';
export const dynamic = "force-dynamic";

export default async function Page() {
  const [trendingRes, topRatedRes, actionMoviesRes] = await Promise.all([
    fetchFromTMDB(requests.trending),
    fetchFromTMDB(requests.topRated),
    fetchFromTMDB(requests.actionMovies),
  ]);

  const trending = trendingRes.results || [];
  const topRated = topRatedRes.results || [];
  const actionMovies = actionMoviesRes.results || [];

  // Mescla todos os filmes e remove duplicatas
  const merged = [...trending, ...topRated, ...actionMovies] as MediaItem[];
  const allMovies = Array.from(
    new Map(merged.map((movie) => [movie.id, movie])).values()
  );

  return (
    <AllMoviesProvider allMovies={allMovies}>
      <Header />
      <Banner />
      <Row title="Em Alta" movies={trending} />
      <Row title="Mais Bem Avaliados" movies={topRated} />
      <Row title="Ação" movies={actionMovies} />
    </AllMoviesProvider>
  );
}
