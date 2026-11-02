import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Auto<span>Share</span>
      </a>

      <nav className={styles.navigation}>
        <a href="/">Каталог</a>
        <a href="/account">Додати авто</a>
        <a href="/account">Кабінет</a>
      </nav>
    </header>
  );
}

export default Header;
