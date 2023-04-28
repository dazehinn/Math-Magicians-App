import PropTypes from 'prop-types';
import './calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult((prevState) => calculate(prevState, e.target.innerText));
  };

  return (
    <div className="calculatorContainer">
      <OutputDisplay contented={result.next || result.total || '0'} />
      <div className="operatorSection">
        <CalculatorButton className="operator" character="÷" handleOnClick={handleClick} />
        <CalculatorButton className="operator" character="x" handleOnClick={handleClick} />
        <CalculatorButton className="operator" character="-" handleOnClick={handleClick} />
        <CalculatorButton className="operator" character="+" handleOnClick={handleClick} />
        <CalculatorButton className="operator" character="=" handleOnClick={handleClick} />
      </div>

      <div className="operandSection">
        <CalculatorButton className="digit" character="AC" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="+/-" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="%" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="7" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="8" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="9" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="4" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="5" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="6" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="1" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="2" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="3" handleOnClick={handleClick} />
        <CalculatorButton className="digit zero" character="0" handleOnClick={handleClick} />
        <CalculatorButton className="digit" character="." handleOnClick={handleClick} />
      </div>
    </div>
  );
};

const CalculatorButton = ({ character, className, handleOnClick }) => (
  <button type="button" className={className} onClick={handleOnClick}>{character}</button>
);

CalculatorButton.propTypes = {
  character: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

const OutputDisplay = ({ contented }) => (
  <div className="outputDisplay">{contented}</div>
);

OutputDisplay.propTypes = {
  contented: PropTypes.string,
};

OutputDisplay.defaultProps = {
  contented: '0',
};

export default Calculator;
