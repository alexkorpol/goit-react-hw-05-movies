import {
  Container,
  DetailsContainer,
  Image,
  InfoContainer,
  Title,
  TitleSpan,
  Text,
  MoreNavigate,
  MoreInfo,
  More,
  MoreList,
  MoreItem,
  LinkTo,
} from './MovieDetailPage.styled';

import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export default function MovieDetailPage({ data }) {
  const {
    original_title,
    title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = data;

  // Prepear data for render
  const rating = Math.round(vote_average * 10);
  const date = release_date.slice(0, 4);
  const genresArray = genres.map(gen => gen.name).join(', ');
  const location = useLocation();

  return (
    <Container>
      <DetailsContainer>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
          }
          alt={title}
        />
        <InfoContainer>
          <Title>
            {original_title ? original_title : 'There should have been a title'}
          </Title>
          <Text>
            <TitleSpan>Rating: </TitleSpan>{' '}
            {rating ? rating : 'Absent'}
          </Text>
          <Text>
            <TitleSpan>Release date: </TitleSpan>{' '}
             {date ? date : 'Absent'}
          </Text>
          <Text>
            <TitleSpan>Genre: </TitleSpan>{' '}
            {genresArray ? genresArray : 'Repeated'}
          </Text>
          <Text>
            <TitleSpan>Description: </TitleSpan>
            {overview
              ? overview
              : 'There should have been a description here, but it is better to see once than to read a hundred times.'}
          </Text>
        </InfoContainer>
      </DetailsContainer>
      <MoreInfo>
        <More>Additional information</More>
      </MoreInfo>
      <MoreNavigate>
        <MoreList>
          <MoreItem>
            <LinkTo to="cast" state={location.state}>
              Cast
            </LinkTo>
          </MoreItem>
          <MoreItem>|</MoreItem>
          <MoreItem>
            <LinkTo to="reviews" state={location.state}>
              Reviews
            </LinkTo>
          </MoreItem>
        </MoreList>
      </MoreNavigate>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

MovieDetailPage.propTypes = {
  data: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
