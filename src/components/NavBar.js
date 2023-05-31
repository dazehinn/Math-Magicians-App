import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.textLog}>Math Magicians</h1>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
