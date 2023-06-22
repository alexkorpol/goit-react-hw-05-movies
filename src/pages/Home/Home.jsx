import React, { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";
// import { SearchBox } from "../components/SearchBox";
// import { getProducts } from "../fakeAPI";
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
        console.log("******************** data:", data)
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
  // const getMovies = async () => {
  //   try { await const response = getTrendingMovies();
  //     // console.log("file: Home.jsx:12 ~ getMovies ~ response:", response)
  //   } catch (error) {
  //     console.error(error);
  //     } finally {
  //       console.log("finally")
  //     }
  // }

  // const movies = async () => {
  //   try {
  //    const data =  await getTrendingMovies();
  //     setMovies(data);
      // setStatus(STATUS.RESOLVED);
      // setError(null);
    // } catch (error) {
      // setStatus(STATUS.REJECTED);
      // setError(error.message);
    // }

  // const fff = movies();
  // console.log("movies-fff +++++++++++>>>>>", data);
  // const movies = getMovies();
  // console.log("file: Home.jsx:20 ~ Home ~ movies:", movies)

  // getDayTrending();
  // console.log("file: Home.jsx:10 ~ Home ~ todayMoviesArray:", results)

console.log("movies +++++Home++++++>>>>>", movies)
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

//  const getMovies = async () => {
//       try {
//         const response = await getTrendingMovies();
//         setMovies(response);
//       } catch (error) {
//         console.error(error);
//         setIsError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };


  // return (
  //   <main>
  //     <SearchBox value={productName} onChange={updateQueryString} />
  //     <ProductList products={visibleProducts} />
  //   </main>
