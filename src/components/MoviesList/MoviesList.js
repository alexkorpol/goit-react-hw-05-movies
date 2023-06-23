import PropTypes from 'prop-types';
import  List  from "./MoviesList.styles";
import  MovieListItem  from "../MovieListItem/MovieListItem";

const MoviesList = ({movies}) => {
return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieListItem
            key={id}
            id={id}
            title={title}
            poster={poster_path}
          />
        );
      })}
    </List>
  );
}

export default MoviesList

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

