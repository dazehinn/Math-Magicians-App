import PropTypes from 'prop-types';

const CalculatorButton = ({ character, className, handleOnClick }) => (
  <button type="button" className={className} onClick={handleOnClick}>{character}</button>
);

CalculatorButton.propTypes = {
  character: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
