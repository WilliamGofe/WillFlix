const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
};

export async function fetchFromTMDB(endpoint: string) {
  try {

    const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!apiKey) {
      console.error("TMDB API Key não definida!");
      return { results: [] }; 
    }

    const res = await fetch(`${BASE_URL}${endpoint}?api_key=${apiKey}`);

    if (!res.ok) {
      console.error("Erro ao buscar dados da TMDB:", res.status, res.statusText);
      return { results: [] }; 
    }

    return res.json();
  } catch (err) {
    console.error("Erro na request TMDB:", err);
    return { results: [] }; 
  }
}
