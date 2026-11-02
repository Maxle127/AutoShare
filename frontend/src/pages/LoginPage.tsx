import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <main className={styles.login}>
      <form className={styles.loginForm}>
        <h1>Вхід до облікового запису</h1>

        <div className={styles.formField}>
          <label htmlFor="email">Електронна пошта</label>
          <input id="email" type="email" placeholder="example@gmail.com" />
        </div>

        <div className={styles.formField}>
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" placeholder="Введіть пароль" />
        </div>

        <button type="button" className={styles.loginButton}>
          Увійти
        </button>

        <div className={styles.register}>
          <p>Немає облікового запису?</p>
          <a href="#register">Зареєструватися</a>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
