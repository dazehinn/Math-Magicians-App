

import Calculator from '../../components/calculator';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorButton from '../../components/CalculatorButton';

describe('Pad Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<CalculatorButton symbol="1" function1={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Click button', () => {
    const handleClick = jest.fn();
    render(<CalculatorButton symbol="1" function1={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button, {});
    expect(button.textContent).toBe('1');
  });
});