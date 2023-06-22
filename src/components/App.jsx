import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import  SharedLayout  from './SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound/NotFound.styled';

// ! ====== lazy load ======
const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails.jsx'));

export const App = () => {
  return (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

    </div>


  );
};
