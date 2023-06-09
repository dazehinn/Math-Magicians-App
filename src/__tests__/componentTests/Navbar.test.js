// import Calculator from '../../components/calculator';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const MockNavBar = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

describe('NavBar Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<MockNavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
