import axios from 'axios';
import { API_KEY, BASE_URL } from './api-key';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  adult: false,
  language: 'en-US',
};

// ! ====== for component Home popular movies ======
export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');

      return data.results;
}

// ! ====== for component Movies search movies ======
export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);

    return data.results;
};

// ! ====== for details info about movie ======
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);

    return data;
};

// ! ====== get info about the cast of movie ======
export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
};

// ! ====== get info about the rewiews of movie ======
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);

  return data;
};















// !========================Work Requests to API =================================================
// список самых популярных фильмов на сегодня для создания коллекции на главной странице -
// https://api.themoviedb.org/3/trending/movie/day?api_key=0d9ddfeb4636025259fcaee6725b8ad3

// поиск кинофильма по ключевому слову на странице фильмов
// https://api.themoviedb.org/3/search/movie?query=batman&api_key=0d9ddfeb4636025259fcaee6725b8ad3&page=1

//
// запрос полной информации о фильме для страницы кинофильма
// https://api.themoviedb.org/3/movie/697843?api_key=0d9ddfeb4636025259fcaee6725b8ad3

//
// запрос информации о актёрском составе для страницы кинофильма
// https://api.themoviedb.org/3/movie/697843/credits?language=en-US&api_key=0d9ddfeb4636025259fcaee6725b8ad3
//
// запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/298618/reviews?language=en-US&page=1&api_key=0d9ddfeb4636025259fcaee6725b8ad3

// URL для фото https://image.tmdb.org/t/p/original/ ${film.backdrop_path})
