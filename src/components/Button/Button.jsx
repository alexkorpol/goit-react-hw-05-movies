import PropTypes from 'prop-types';
import { ButtonTag } from './ButtonBack.styled';

export default function Button({ location }) {
  return (
    <>
      <ButtonTag to={location}> Back to</ButtonTag>
    </>
  );
}

Button.propTypes = {
  location: PropTypes.any.isRequired,
};
