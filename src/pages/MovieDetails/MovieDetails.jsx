import { useEffect, useState, useRef } from 'react'; //+
import { getMovieDetails } from 'service/api';

import { useParams } from 'react-router-dom'; //+
import { Navigate, useLocation } from 'react-router-dom'; //+
import MovieDetailPage from 'components/MovieDetailPage/MovieDetailPage'; //+
import { Section, Container } from './MovieDetails.styled';//+
import Button from 'components/Button/Button';//+
import Loader from 'components/Loader/Loader';//+

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailPage, setMovieDetailPage] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');


  useEffect(() => {
    const detailInfo = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await getMovieDetails(movieId);
        setMovieDetailPage(data);
        setStatus(STATUS.RESOLVED);
        setError('');
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };
    detailInfo();
  }, [movieId, setMovieDetailPage]);

  return (
    <Section>
      <Container>
        <Button location={backLink.current} />
        {error && <Navigate to="/" replace />}
        {status === STATUS.PENDING && <Loader />}
        {movieDetailPage && <MovieDetailPage data={movieDetailPage} />}
      </Container>
    </Section>
  );
}

export default MovieDetails
