import PropTypes from 'prop-types';
import { Container, Text } from './ErrorOccurred.styled';

export default function ErrorMessageToUser({ message }) {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
