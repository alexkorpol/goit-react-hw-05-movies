import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Image, Title } from './MovieListItem.styled';

 const MovieListItem = ({ id, title, poster }) => {

  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Image
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
            }
            alt="{title}"
          />
        </div>
        <Title>{title ? title : 'No tittle'}</Title>
      </Link>
    </Item>
  );
 }
export default MovieListItem


MovieListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  poster: PropTypes.string,
};
