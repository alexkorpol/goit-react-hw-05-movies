import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import ErrorMessageToUser from 'components/ErrorOccurred/ErrorOccurred';
import ReviewsContent from 'components/ReviewsContent/ReviewsContent';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        if (data.results.length === 0) {
          setError('There are no reviews');
          return;
        }
        console.log("data", data.results);
        console.log("data.length", data.results.length);
// prepare info about reviews
        const reviewsInfo = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
  }));
        setReviews(reviewsInfo);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessageToUser message={error} />}
      {reviews && <ReviewsContent reviews={reviews} />}
    </div>
  );
}

export default  Reviews
