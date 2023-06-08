import renderer from 'react-test-renderer';
import DoMaths from '../../routes/DoMaths';

describe('Home Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<DoMaths />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
