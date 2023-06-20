// список самых популярных фильмов на сегодня для создания коллекции на главной странице -
// https://api.themoviedb.org/3/trending/movie/day?api_key=0d9ddfeb4636025259fcaee6725b8ad3 - рабочая +
// https://api.themoviedb.org/3/trending/movie/day?language=en-US
// respondes.results -> id, title
//

// поиск кинофильма по ключевому слову на странице фильмов
// https://api.themoviedb.org/3/search/movie?query=batman&api_key=0d9ddfeb4636025259fcaee6725b8ad3&page=1 - работает +
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
// respondes.results -> id, title

//
// запрос полной информации о фильме для страницы кинофильма
// https://api.themoviedb.org/3/movie/697843?api_key=0d9ddfeb4636025259fcaee6725b8ad3 - рабочая +
//https://api.themoviedb.org/3/movie/movie_id?api_key=0d9ddfeb4636025259fcaee6725b8ad3
//

//
// запрос информации о актёрском составе для страницы кинофильма
// https://api.themoviedb.org/3/movie/697843/credits?language=en-US&api_key=0d9ddfeb4636025259fcaee6725b8ad3 - рабочая +
//  ttps://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
// respondes.cast -> name, character, profile_path (часть адреса для фото)
//
// запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/298618/reviews?language=en-US&page=1&api_key=0d9ddfeb4636025259fcaee6725b8ad3 - рабочая +
// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1
// respondes.results -> content

// Для фото https://image.tmdb.org/t/p/original/ ${film.backdrop_path})



// const KEY = '0d9ddfeb4636025259fcaee6725b8ad3';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
// const UPCOMING_URL = `${BASE_URL}/movie/upcoming`;
// const IMG_W400 = `/w400`;

// export { KEY, BASE_URL,  IMG_BASE_URL,  IMG_W400, UPCOMING_URL};

import axios from 'axios';
import { API_KEY, BASE_URL } from './api-key';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  adult: false,
  language: 'en-US',
};


// export const getDayTrending  = async ()  => {
//   const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&page=1`;
//   const { data } = await axios.get(url);
//   return data.results;
// }
// https://api.themoviedb.org/3/trending/movie/day?api_key=0d9ddfeb4636025259fcaee6725b8ad3
//

// export const getTrendingMovies = async () => {
//   const { data } = await axios.get('/trending/movie/day');

//   return data.results;
// };


// for Home
export const getTrendingMovies = async () => {
   const { data } = await axios.get('/trending/movie/day');
      return data.results;
}

// for Movies
export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);
    return data.results;
};

// for details info about movie
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
    return data;
};

// export const getMovieCredits = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/credits`);

//   return data;
// };

// export const getMovieReviews = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/reviews`);

//   return data;
// };





// ?===============================================================================
// Tatyana
// export const fetchTrendingMovies = async () => {
//   const { data } = await axios.get(
//     `trending/movie/day?api_key=${API_KEY}&language=uk&page=1`
//   );
//   console.log("data.results====>>>>>", data.results);
//   return data.results;
// };

// !=================================================================================
// import axios from 'axios';

// const API_KEY = '0d9ddfeb4636025259fcaee6725b8ad3';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.params = {
//   api_key: API_KEY,
//   adult: false,
//   language: 'en-US',
// };

// export const getTrendingMovies = async () => {
//   const { data } = await axios.get('/trending/movie/day');

//   return data.results;
// };

// export const searchMovies = async (query, page = 1) => {
//   const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);

//   return data;
// };

// export const getMovieDetails = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}`);

//   return data;
// };

// export const getMovieCredits = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/credits`);

//   return data;
// };

// export const getMovieReviews = async movieId => {
//   const { data } = await axios.get(`/movie/${movieId}/reviews`);

//   return data;
// };
