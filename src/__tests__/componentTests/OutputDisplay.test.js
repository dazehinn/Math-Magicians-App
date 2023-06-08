import renderer from 'react-test-renderer';
import OutputDisplay from '../../components/OutputDisplay';

describe('Display Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<OutputDisplay calcObj={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});