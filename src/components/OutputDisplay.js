import PropTypes from 'prop-types';

const OutputDisplay = ({ contented }) => (
  <div className="outputDisplay">{contented}</div>
);

OutputDisplay.propTypes = {
  contented: PropTypes.string,
};

OutputDisplay.defaultProps = {
  contented: '0',
};

export default OutputDisplay;
