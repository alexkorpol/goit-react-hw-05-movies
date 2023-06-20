import { Route, Routes } from 'react-router-dom';
import { Home } from "pages/Home/Home";
import  SharedLayout  from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound.styled';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

    </div>


  );
};
