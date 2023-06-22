import { Container, List, Item, Image, Title } from './Credits.styled';
import PropTypes from 'prop-types';

export default function Credits({ credits }) {
  return (
    <Container>
      <List>
        {credits.map(({ id, name, profilePath }) => {
          return (
            <Item key={id}>
              <div>
                <Image
                  src={
                    profilePath
                      ? `https://image.tmdb.org/t/p/w500${profilePath}`
                      : `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/No-image-available.jpg/640px-No-image-available.jpg`
                  }
                  alt={name}
                />
              </div>
              <Title>{name ? name : 'Without  name'}</Title>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

  Credits.propTypes = {
  credits: PropTypes.array.isRequired,
};
