import calculate from '../../logic/calculate';

describe('Operate function', () => {
  test('Invert the sign of a number', () => {
    expect(calculate({
      total: null,
      next: '4',
      operation: null,
    }, '+/-').next).toBe('-4');
  });
  test('Clears the output screen', () => {
    expect(calculate({
      total: '15',
      next: '63',
      operation: '+',
    }, 'AC').next).toBeNull();
  });
  test('Displays a decimal number', () => {
    expect(calculate({
      total: '15',
      next: '63',
      operation: '.',
    }, '.').next).toBe('63.');
  });
  test('Compute a calculation', () => {
    expect(calculate({
      total: '15',
      next: '12',
      operation: '+',
    }, '=').next).toBeNull();
  });
});
