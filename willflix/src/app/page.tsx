import { fetchFromTMDB, requests } from '../lib/tmdb';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Header from '../components/Header';

export default async function page() {
  const [trending, topRated, actionMovies] = await Promise.all([
    fetchFromTMDB(requests.trending),
    fetchFromTMDB(requests.topRated),
    fetchFromTMDB(requests.actionMovies),
  ]);
console.log(topRated.results)
  return (
    <>
      <Header />
      <Banner movie={trending.results[0]} />
      <Row title="Em Alta" movies={trending.results} />
      <Row title="Mais Bem Avaliados" movies={topRated.results} />
      <Row title="Ação" movies={actionMovies.results} />
    </>
  );
}
