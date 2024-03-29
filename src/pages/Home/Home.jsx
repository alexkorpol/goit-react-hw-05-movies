import React, { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from "service/api";
import ErrorMessageToUser from 'components/ErrorOccurred/ErrorOccurred';
import Loader from 'components/Loader/Loader';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


const Home = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingFilm = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await getTrendingMovies();
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };

    fetchTrendingFilm();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {status === STATUS.REJECTED && <ErrorMessageToUser message={error} />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && <MoviesList movies={movies} />}

    </main>
  );
};

export  default Home

