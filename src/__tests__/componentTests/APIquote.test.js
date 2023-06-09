import renderer from 'react-test-renderer';
import APIquote from '../../components/APIquote';

describe('Quote Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<APIquote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
