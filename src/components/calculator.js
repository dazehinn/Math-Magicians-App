import './calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';
import OutputDisplay from './OutputDisplay';

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

export default Calculator;
