import operate from '../../logic/operate';

describe('Operate function', () => {
  test('Add two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('Substract two numbers', () => {
    expect(operate('21', '12', '-')).toBe('9');
  });

  test('Multiple two numbers', () => {
    expect(operate('5', '10', 'x')).toBe('50');
  });

  test('Divide two numbers', () => {
    expect(operate('80', '4', '÷')).toBe('20');
  });

  test('Divide tby zero', () => {
    expect(operate('18', '0', '÷')).toBe("Can't divide by 0.");
  });
});
