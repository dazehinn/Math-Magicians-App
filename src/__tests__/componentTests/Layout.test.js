// import Calculator from '../../components/calculator';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

const MockHeader = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

describe('Header Component', () => {
  test('Tree', () => {
    const tree = renderer.create(<MockHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
