import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Calculator = () => (
  <div className="calculatorContainer">
    <OutputDisplay />
    <div className="operatorSection">
      <CalculatorButton className="operator" character="/" />
      <CalculatorButton className="operator" character="x" />
      <CalculatorButton className="operator" character="-" />
      <CalculatorButton className="operator" character="+" />
      <CalculatorButton className="operator" character="=" />
    </div>

    <div className="operandSection">
      <CalculatorButton className="digit" character="AC" />
      <CalculatorButton className="digit" character="+/-" />
      <CalculatorButton className="digit" character="%" />
      <CalculatorButton className="digit" character={7} />
      <CalculatorButton className="digit" character={8} />
      <CalculatorButton className="digit" character={9} />
      <CalculatorButton className="digit" character={4} />
      <CalculatorButton className="digit" character={5} />
      <CalculatorButton className="digit" character={6} />
      <CalculatorButton className="digit" character={1} />
      <CalculatorButton className="digit" character={2} />
      <CalculatorButton className="digit" character={3} />
      <CalculatorButton className="digit zero" character={0} />
      <CalculatorButton className="digit" character="." />
    </div>
  </div>
);

const CalculatorButton = ({ character, className }) => (
  <button type="button" className={className}>{character}</button>
);

CalculatorButton.propTypes = {
  character: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const OutputDisplay = () => (
  <div className="outputDisplay">1234567890</div>
);
export default Calculator;
