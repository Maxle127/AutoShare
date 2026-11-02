import { Link } from 'react-router';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Auto<span>Share</span>
      </Link>

      <nav className={styles.navigation}>
        <Link to="/">Каталог</Link>
        <Link to="/cars/1">Авто</Link>
        <Link to="/account">Кабінет</Link>
        <Link to="/login">Вхід</Link>
      </nav>
    </header>
  );
}

export default Header;
