import { Route, Routes } from 'react-router-dom';
import { Home } from "pages/Home";
import  SharedLayout  from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies/Movies';
// import {SharedLayout} from './SharedLayout'

export const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>

      </Routes>

    </div>


  );
};
