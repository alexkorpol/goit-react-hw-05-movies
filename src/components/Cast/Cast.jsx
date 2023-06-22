import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import ErrorMessageToUser from 'components/ErrorOccurred/ErrorOccurred';
import Credits from 'components/Credits/Credits';


const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        if (data.length === 0) {
          setError('There is no information about the cast');
          return;
        }
// prepare info about all actors
      const castInfo = data.cast.map(({ id, name, profile_path }) => ({
          id,
          name,
          profilePath: profile_path,
      }));

        setCredits(castInfo);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessageToUser message={error} />}
      {credits && <Credits credits={credits} />}
    </div>
  );
}

export default Cast
