import PropTypes from 'prop-types';

function app() {
  return 0;
}

const CalculatorButton = ({ character, className, handleOnClick }) => (
  <button type="button" className={className} onClick={handleOnClick}>{character}</button>
);

CalculatorButton.propTypes = {
  character: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

CalculatorButton.defaultProps = {
  character: '1',
  className: '',
  handleOnClick: app
}

export default CalculatorButton;
